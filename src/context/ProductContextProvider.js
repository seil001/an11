import { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, API, LIMIT } from "../helpers/const";
import axios from "axios";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pageTotalCount: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
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
    let { data } = await axios(`${API}/${window.location.search}`);
    let action = {
      type: "GET_PRODUCTS",
      payload: data,
    };
    dispatch(action);
    // функция для стягивание продуктов / получить продукт

    //а это функция для одного продукта details создаем
    //   //в INIT State oneProduct пустой обьект
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const saveEditProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct); //не сразу показывает newProduct
    getProducts(); //чтобы сразу показать newProduct
  };

  const getOneProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);

    let action = {
      type: "GET_ONE_PRODUCT",
      payload: data,
    };
    dispatch(action);
  };
  const { search } = useState;
  async function getPagination() {
    try {
      const res = await axios(
        `${API}${window.location || search`?_limit=${LIMIT}`}`
      );
      const totalPages = Math.ceil(res.headers["x-total-count"] / LIMIT);
      let action = {
        type: ACTIONS.products,
        payload: res.data,
      };
      dispatch(action);

      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalPages,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    addProduct,
    getProducts,
    getOneProduct,
    deleteProduct,
    saveEditProduct,
    getPagination,
    products: state.products,
    oneProduct: state.oneProduct,
    pageTotalCount: state.pageTotalCount,
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
