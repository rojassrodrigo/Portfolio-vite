import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  Phone,
  Email, 
  LocationOn,
  Instagram,
} from "@mui/icons-material";
import css from '../css/Testimonials.module.css';
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function InfoContact() {
  const contactInfo = {
    phone: "+543704231864",
    email: "rojasrodrigo@live.com",
    address: "Av. Hipolito Yrigoyen 165, Cordoba, Argentina",
    social: {
      github: "https://github.com/rojassrodrigo",
      linkedin: "https://www.linkedin.com/in/rodrigo-rojas-9b3275216/",
      instagram: "https://www.instagram.com/rojassrodrigo/",
    },
  };

  return (
    <section id="testimonials">
      <div className={css.cardContainer}>
        <div className={css.cardTitle}>
          <Box sx={{ mr: 1 }}>
            <ContactMailIcon fontSize="small" />
          </Box>
          <Typography variant="h5">Información de contacto</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: 1 }}>
                <Phone />
              </Box>
              <Typography variant="subtitle1">{contactInfo.phone}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: 1 }}>
                <Email />
              </Box>
              <Typography variant="subtitle1">{contactInfo.email}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: 1 }}>
                <LocationOn />
              </Box>
              <Typography variant="subtitle1">
                {contactInfo.address}
              </Typography>
            </Box>
          </Grid>
        </Grid>  
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Síguenos en:</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: 1 }}>
              <a target="_blanck" href={contactInfo.social.github}>
                <GitHubIcon />
              </a>
            </Box>
            <Box sx={{ mr: 1 }}>
              <a target="_blanck" href={contactInfo.social.linkedin}>
                <LinkedInIcon/>
              </a>
            </Box>
            <Box sx={{ mr: 1 }}>
              <a target="_blanck" href={contactInfo.social.instagram}>
                <Instagram />
              </a>
            </Box>
          </Box>
        </Box>
      </div>
    </section>
  );
}
