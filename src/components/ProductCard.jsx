import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useCart } from "../context/CartContextProvider";
const ProductCard = () => {
  const { products, getProducts, deleteProduct } = useContext(productContext);
  const { addProductToCart, isAlreadyInCart, deleteFromCart } = useCart();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {products.map((item, index) => (
        <Card
          sx={{ maxWidth: 345, marginTop: "80px", marginBottom: "20px" }}
          key={index}
        >
          <CardMedia
            sx={{ height: 400 }}
            image={item.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`detail/${item.id}`}>
              <Button
                style={{ margin: "5px" }}
                size="small"
                variant="contained"
                color="secondary"
              >
                Details
              </Button>
            </Link>
            <Link to={`edit/${item.id}`}>
              <Button size="small">Edit</Button>
            </Link>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>

            <IconButton
              onClick={() => addProductToCart(item)}
              color={isAlreadyInCart(item.id) ? "error" : "primary"}
            >
              <FavoriteBorderRoundedIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
