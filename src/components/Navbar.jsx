import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import AdbIcon from "@mui/icons-material/Adb";

import Search from "./Search";

import { Badge, inputAdornmentClasses } from "@mui/material";

import { useCart } from "../context/CartContextProvider";
import { Link } from "react-router-dom";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

function Navbar() {
  const { cartLength, getCart } = useCart();
  console.log(cartLength, "cart");

  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          color: "inherit",
          // display: { xs: "block", md: "flex" },
          backgroundColor: { xs: "red", md: "inherit" },
          flexDirection: "column",
        }}
      >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* md */}
            РЕСТОРАН
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* //sx */}
            РЕСТОРАН
          </Typography>

          <Search />
          <Box sx={{ flexGrow: 0 }}>
            <IconButton component={Link} to="/cart" sx={{ color: "white" }}>
              <Badge
                badgeContent={cartLength}
                sx={{ color: "white" }}
                color="error"
              >
                <FavoriteBorderRoundedIcon sx={{ width: "20px" }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
