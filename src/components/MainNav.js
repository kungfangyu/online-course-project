"use client";
import { BACKEND_PATH, FRONTEND_PATH } from "@/helps/variables";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function MainNav({ watchlist }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                px: 0,
              }}
            >
              <Image
                src={
                  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
                }
                alt="logo of sitemark"
                width={140}
                height={30}
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  onClick={handleMenuOpen}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    COURSES
                  </Typography>
                </MenuItem>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Link href={FRONTEND_PATH}>Front-End Development</Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    sx={{ py: "6px", px: "12px" }}
                    onClick={() => scrollToSection("BACKEND")}
                  >
                    <Link href={BACKEND_PATH}>Back-End Development</Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    sx={{ py: "6px", px: "12px" }}
                    onClick={() => scrollToSection("DEVOPS")}
                  >
                    DevOps Development
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    sx={{ py: "6px", px: "12px" }}
                    onClick={() => scrollToSection("DEVOPS")}
                  >
                    Testing
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <MenuItem>
                <InputBase
                  sx={{ flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton type="button" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </MenuItem>

              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link href={"/watchlist"}>
                  <Typography variant="body2" color="text.primary">
                    WATCH LIST
                  </Typography>
                </Link>
              </MenuItem>

              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/signup"
              >
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem onClick={handleMenuOpen}>COURSES</MenuItem>
                  <Menu open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={() => scrollToSection("FRONTEND")}>
                      Front-End Development
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("BACKEND")}>
                      Back-End Development
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("DEVOPS")}>
                      DevOps Development
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("DEVOPS")}>
                      Testing
                    </MenuItem>
                  </Menu>
                  <Divider />
                  <MenuItem>WATCH LIST</MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/sign-up"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default MainNav;
