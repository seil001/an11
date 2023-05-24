import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useEffect } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useContext } from "react";

function ProductList() {
  const { products, getProducts, pageTotalCount } = productContext();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);

  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        count={pageTotalCount}
        page={page}
        variant="outlined"
        color="error"
        onChange={(e, p) => setPage(p)}
      />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
  );
}

export default ProductList;
