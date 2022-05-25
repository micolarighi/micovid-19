import React from 'react';

import { Cards, CountryPicker, Chart, Footer, About } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import { Card, CardContent, Typography, Grid } from '@mui/material';

import image from './images/image.png';
import vector from './images/vector.svg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Grid marginBottom={4} columnSpacing={10} container justifyContent={"center"} alignItems={"center"}>
          <Grid item >
            <img width={420} className={styles.image} src={image} alt="COVID-19" />
            <h3>A Covid-19 Tracker created by <strong>Micola Arighi</strong></h3>
          </Grid>
          <Grid item>
            <img width={200} src={vector} />
          </Grid>
        </Grid>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Grid container justifyContent={"center"} spacing={5} >
          <Grid item xs={12} md={4} className={styles.cardGrid}>
            <Cards data={data} />
          </Grid>
          <Grid item xs={12} md={7} className={styles.cardGrid}>
            <Chart data={data} country={country} />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} marginTop={10} marginBottom={12}>
          <About />
        </Grid>
        <Footer />

      </div >
    );
  }
}

export default App;