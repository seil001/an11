import React from "react";
import { useContext } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductDetails = () => {
  const { getOneProduct, oneProduct } = useContext(productContext);
  //получили из функции getOneProduct в ProductContextProvider а.
  // и здесь будем заходить в эти функции

  const { id } = useParams(); //хук useParams прилетает id

  const navigate = useNavigate(); //хук чтобы зароботал button внутри containera

  useEffect(() => {
    getOneProduct(id);
  }, []); // оно должно применяться единожды поэтому пустой массив

  console.log(oneProduct, "oneProduct"); //выходить ошибка в консоли
  //чтобы не выходило ошибка мы создаем useParams вверху
  return (
    <div>
      <Button sx={{ color: "tomato" }} onClick={() => navigate(-1)}>
        GO BACK
      </Button>
      <h2> Product Details</h2>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {oneProduct ? (
          <Card sx={{ maxWidth: 945, marginBottom: "20px" }}>
            <CardMedia
              component="img"
              height="170px"
              sx={{ objectFit: "contain" }}
              image={oneProduct.image}
              alt="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Title:{oneProduct.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description:{oneProduct.Description}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Price:{oneProduct.Price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category:{oneProduct.Category}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </Container>
    </div>
  ); //мы внутри Container а использовали тернарный оператор потому что
  // в консоле  было ошибка он долго думал и выводил ошиббку не успевал сразу обьявит обьект
  //после тернарного оператора он сразу выводит в консол обьект
};

export default ProductDetails;
