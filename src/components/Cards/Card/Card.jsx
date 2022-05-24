import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitle }) => (
  <Grid item xs={12} paddingX={6} md={12} justifyContent={"center"} component={Card} className={cx(styles.card, className)} >
    <CardContent justifyContent={"center"}>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant="h4" component="h2">
        <CountUp start={0} end={value} duration={2.75} separator="," />
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography variant="h5" component="p">
        {cardSubtitle}
      </Typography>
    </CardContent>
  </Grid >
);

export default CardComponent;