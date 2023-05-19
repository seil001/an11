import { createContext, useReducer } from "react";
import { API } from "../helpers/const";
import axios from "axios";
export const productContext = createContext();

const INIT_STATE = { products: [], oneProduct: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    let { data } = await axios(API);
    let action = {
      type: "GET_PRODUCTS",
      payload: data,
    };
    dispatch(action);
  }; // функция для стягивание продуктов / получить продукт

  //а это функция для одного продукта details создаем
  //в INIT State oneProduct пустой обьект
  const getOneProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);

    let action = {
      type: "GET_ONE_PRODUCT",
      payload: data,
    };
    dispatch(action);
  };

  const values = {
    addProduct,
    getProducts,
    getOneProduct,
    products: state.products,
    oneProduct: state.oneProduct,
  };

  return (
    <>
      <productContext.Provider value={values}>
        {children}
      </productContext.Provider>
    </>
  );
};

export default ProductContextProvider;
