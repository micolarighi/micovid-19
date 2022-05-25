import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Typography } from '@mui/material';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <Typography variant="h5" color="textSecondary">
        Select A Country
      </Typography>
      <NativeSelect className={styles.nativeSelect} defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <optgroup>
          <option value="">United States</option>
        </optgroup>
        {countries.map((country, i) => <optgroup><option key={i} value={country}>{country}</option></optgroup>)}

      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
