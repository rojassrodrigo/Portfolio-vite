import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const menuItems = [
    { text: "Rodrigo Rojas", href: "#about" },
    { text: "Mis Proyectos", href: "#projects" },
    { text: "Habilidades", href: "#skills" },
    { text: "¡Contactame!", href: "#contact" },
  ];

  return (
    <AppBar position="fixed"   sx={{
      background:
        "linear-gradient(to bottom, #121212, #000000)",
      transition: "background-color 0.3s ease-in-out",
      boxShadow: "horizontal-offset",
    }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Button variant="h6" href="#about" sx={{ display: { xs: "none", sm: "block" } }}>
          Rodrigo Rojas
        </Button>
        <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer(false)} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <List sx={{ width: "200px" }}>
            {menuItems.map((item) => (
              <ListItem key={item.text} button onClick={toggleDrawer(false)} component="a" href={item.href}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ position: 'absolute', top: 0, right: 0, color: 'tomato' }}
          >
            <CloseIcon />
          </IconButton>
        </Drawer>

        <Button color="inherit" href="#projects" sx={{ display: { xs: "none", sm: "block" } }}>
          Mis Proyectos
        </Button>
        <Button color="inherit" href="#skills" sx={{ display: { xs: "none", sm: "block" } }}>
          Habilidades
        </Button>
        <Button color="inherit" href="#contact" sx={{ display: { xs: "none", sm: "block" } }}>
          Contactame!
        </Button>
      </Toolbar>
    </AppBar>
  );
}
