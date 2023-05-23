import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useEffect } from "react";
import { useProduct } from "../context/ProductContextProvider";

export default function MyPagination() {
  const [page, setPage] = useState(1);

  return (
    <Stack spacing={2}>
      {/* <Pagination count={10} variant="outlined" /> */}
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        count={1}
        page={page}
        variant="outlined"
        color="error"
        onChange={(e, p) => setPage}
      />
      {/* <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled /> */}
    </Stack>
  );
}
