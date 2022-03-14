/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const values = [0, 100, 200, 500, 1000, 2000, 4000];

function valueLabelFormat(value) {
  return `£${value}`;
}

function indexToDonationAmount(value) {
  return values[value];
}
function donationAmountToIndex(amount) {
  return values.indexOf(amount);
}

export default function DiscreteSliderValues({donationAmount, defaultDonationAmount, setDonationAmount}) {

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setDonationAmount(indexToDonationAmount(newValue));
    }
  };

  return (
    <Box>
      <Typography id="non-linear-slider" gutterBottom>
        Donation: {valueLabelFormat(donationAmount)}
      </Typography>
      <Slider
        defaultValue={donationAmountToIndex(defaultDonationAmount)}
        min={0}
        step={1}
        max={6}
        scale={indexToDonationAmount}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}