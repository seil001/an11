import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "../context/CartContextProvider";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage = () => {
  const { cart, getCart, changeProductCount, deleteFromCart } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price </TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell>SubPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <img src={row.image} alt="" width={30} />
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="center">
                <input
                  type="number"
                  value={row.count}
                  onChange={(e) => changeProductCount(e.target.value, row.id)}
                  min={1}
                  max={100}
                />
              </TableCell>
              <TableCell>{row.subPrice}</TableCell>
              <TableCell>
                <IconButton onClick={() => deleteFromCart(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h5">TotalPrice: сом{cart.totalPrice}</Typography>
        <Button variant="outlined" component={Link} to="/">
          Buy
        </Button>
      </Box>
    </div>
  );
};

export default CartPage;
