import { Box, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";

const Search = () => {
  const { products, getProducts } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // console.log(products, "product");
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box>
      <TextField
        sx={{
          marginTop: "5px",
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
  );
};

export default Search;
