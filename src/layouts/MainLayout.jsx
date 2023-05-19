import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
