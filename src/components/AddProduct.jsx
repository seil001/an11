import React, { useContext, useState } from "react";
import { productContext, useProduct } from "../context/ProductContextProvider";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddProduct = () => {
  const { addProduct } = useProduct();
  //   console.log(addProduct);

  const initProduct = {
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  };

  const [product, setProduct] = useState(initProduct);
  console.log(product);

  function handleAddProduct(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  function saveProduct() {
    addProduct(product);
    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      category: "",
    });
  }

  return (
    <Container>
      <h2 style={{ margin: "30px 0" }}>страница для добавления блюд</h2>
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
          value={product.name}
          onChange={handleAddProduct}
          placeholder="Name"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="description"
          value={product.description}
          onChange={handleAddProduct}
          placeholder="Description"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="price"
          value={product.price}
          onChange={handleAddProduct}
          placeholder="Price"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="image"
          value={product.image}
          onChange={handleAddProduct}
          placeholder="Image"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            name="category"
            value={product.category}
            onChange={(e) => handleAddProduct(e)}
          >
            <MenuItem value={"Супы"}>Первое блюдо</MenuItem>
            <MenuItem value={"Салаты"}>Салаты</MenuItem>
            <MenuItem value={"Десерты"}>Десерты</MenuItem>
            <MenuItem value={"Напитки"}>Напитки</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={saveProduct}>
          Add Product
        </Button>
      </div>
    </Container>
  );
};

export default AddProduct;
