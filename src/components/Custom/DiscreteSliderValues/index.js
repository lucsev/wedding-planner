import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valueLabelFormat(value) {
  return `£${value}`;
}

function calculateValue(value) {
  const values = [0, 100, 200, 500, 1000, 2000, 4000];
  return values[value];
}

export default function DiscreteSliderValues() {
  const [value, setValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box>
      <Typography id="non-linear-slider" gutterBottom>
        Donation: {valueLabelFormat(calculateValue(value))}
      </Typography>
      <Slider
        value={value}
        min={0}
        step={1}
        max={6}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}