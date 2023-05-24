import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext, useProduct } from "../context/ProductContextProvider";
import { LIMIT } from "../helpers/const";
import ProductCard from "./ProductCard";
const Search = () => {
  const { products, getProducts, pageTotalCount } = useProduct();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(
    searchParams.get("category") || "все"
  );
  console.log(searchParams.get("q"), "Params");

  useEffect(() => {
    if (category === "все") {
      setSearchParams({
        q: search,
        _page: 1,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        q: search,
        category: category,
        _page: 1,
        _limit: LIMIT,
      });
    }
  }, [search, category]);

  useEffect(() => {
    if (category === "все") {
      setSearchParams({
        q: search,
        _page: page,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        q: search,
        category: category,
        _page: page,
        _limit: LIMIT,
      });
    }
  }, [page]);

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, [setPage]);

  // useEffect(() => {
  //   if (pageTotalCount < page) {
  //     setPage(pageTotalCount);
  //   }
  // }, [pageTotalCount]);
  return (
    <div
      style={{
        display: "flex",
        alignContent: "space-around",
      }}
    >
      <Box>
        <TextField
          sx={{
            marginTop: "5px",
            marginRight: "10px",
            width: "200px",
            height: "60px",
            border: "inherit",
          }}
          variant="outlined"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box
      // sx={{
      //   marginLeft: "5px",
      //   maxWidth: 300,
      //   margin: "20px  auto",
      //   display: "flex",
      //   gap: "30px",
      // }}
      >
        <FormControl
          sx={{
            marginTop: "5px",
            width: "200px",
            height: "60px",
            border: "inherit",
          }}
        >
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"все"}>Все</MenuItem>
            <MenuItem value={"суп"}>Первое блюдо</MenuItem>
            <MenuItem value={"салаты"}>Салаты</MenuItem>
            <MenuItem value={"десерт"}>Десерты</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* <Grid container spacing={2}>
        {products.map((item) => (
          <Grid key={item.id} item md={4} sm={6} sx={12}>
            <ProductCard item={item} key={item.id} />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};

export default Search;
