import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvider";
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
  const { products, getProducts, deleteProduct } = useContext(productContext);
  // console.log(products, "product");
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {products.map((item, index) => (
        <Card sx={{ maxWidth: 350, marginBottom: "20px" }} key={index}>
          <CardMedia
            sx={{ height: 500 }}
            image={item.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2">{item.price}</Typography>
          </CardContent>
          <CardActions>
            <Link to={`detail/${item.id}`}>
              <Button style={{ margin: "5px" }} size="small">
                Details
              </Button>
            </Link>
            <Link to={`edit/${item.id}`}>
              <Button size="small">Edit</Button>
            </Link>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
