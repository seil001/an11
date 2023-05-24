import React from "react";
import ProductList from "../components/ProductList";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container
      sx={{ width: "500px", height: "300px", backgroundColor: "black" }}
    >
      <div>
        <h1>Home</h1>
      </div>
    </Container>
  );
};

export default HomePage;
