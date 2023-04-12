import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        
        <Button variant="h6" href="#about"  sx={{ flexGrow: 1 }}>
          Rodrigo Rojas
        </Button>
        <Button color="inherit" href="#projects">
          Trabajos anteriores
        </Button>
        <Button color="inherit" href="#skills">
          Habilidades
        </Button>
        <Button color="inherit" href="#testimonials">
          Testimonios
        </Button>
        <Button color="inherit" href="#contact">
          ¡Contrátame! <ArrowForwardIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
