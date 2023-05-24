import React, { useContext, useEffect, useState } from "react";
import { productContext, useProduct } from "../context/ProductContextProvider";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const { products, getProducts } = useProduct();
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
            <Button size="small" variant="contained">
              Edit
            </Button>
            <Button size="small" variant="contained" color="error">
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
