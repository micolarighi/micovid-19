import React from 'react'
import styles from './About.module.css'
import { Card, Typography, Box, CardContent, CardActions } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function About() {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
          About this project
        </Typography>
        <Typography variant="h5" component="div">
          This project was created with React JS & Material UI. A main goal of this project is for me to re-learn React JS and trying a new css framework. This project was build by following a youtube tutorial and all the data was taken from an open-api.
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://instagram.com/micolarighi"><InstagramIcon className={styles.icon} /></a>
        <a href="https://www.linkedin.com/in/micola-arighi/"><LinkedInIcon className={styles.icon} /></a>
        <a href="https://www.youtube.com/channel/UCV4p9jOV1IzGim2GbexAFSQ"><YouTubeIcon className={styles.icon} /></a>
      </CardActions>
    </Card>
  );
}