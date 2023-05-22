import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";

const EditProduct = () => {
  const { saveEditProduct, getOneProduct, oneProduct } =
    useContext(productContext);

  const navigate = useNavigate(); // чтобы когда нажали на Save Edit Product
  //он нас перекидывал на главную страницу

  const { id } = useParams();

  const [productToEdit, setProductToEdit] = useState(oneProduct);

  useEffect(() => {
    getOneProduct(id);
    setProductToEdit(oneProduct);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProductToEdit(oneProduct);
    }
  }, [oneProduct]);

  console.log(oneProduct, "editedProd");
  // console.log(productToEdit, "productToEdit");

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...productToEdit, [e.target.name]: Number(e.target.value) };
      console.log(productToEdit.price);
      setProductToEdit(obj);
    } else {
      console.log("hello");
      let obj = { ...productToEdit, [e.target.name]: [e.target.value] };
      setProductToEdit(obj);
    }
  };

  return (
    <Container>
      <h1>Edit product</h1>
      {productToEdit ? (
        <div
          style={{
            display: "flex",
            margin: "50px auto",
            width: "40%",
            flexDirection: "column",
          }}
        >
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="name"
            value={productToEdit.name}
            onChange={handleInp}
            placeholder="name"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="description"
            value={productToEdit.description}
            onChange={handleInp}
            placeholder="descr"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="price"
            value={productToEdit.price}
            onChange={handleInp}
            placeholder="price"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="image"
            value={productToEdit.image}
            onChange={handleInp}
            placeholder="img"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="type"
            value={productToEdit.type}
            onChange={handleInp}
            placeholder="type"
          />

          <Button
            variant="contained"
            onClick={() => {
              saveEditProduct(productToEdit);
              navigate("/");
            }}
          >
            Save Edit Product
          </Button>
        </div>
      ) : null}
    </Container>
  );
};

export default EditProduct;
