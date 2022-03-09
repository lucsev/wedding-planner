/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
{ /*import FormHelperText from '@mui/material/FormHelperText';*/}
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function CheckboxesGroup(rsvpData) {
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;

  console.log('Radio group:', rsvpData.rsvpData);

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel focused={false}>Who is coming?</FormLabel>
        {console.log("Rendered group")}
        {rsvpData.rsvpData?.attendees?.map((attendee, index) =>
          <FormControl key={index}>
          <FormLabel focused={false} id="demo-radio-buttons-group-label">{attendee.firstName}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="notsure" control={<Radio />} label="Not sure" />
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>

        )}        

      { /*
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Person 1"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Person 2"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Person 3"
          />
        </FormGroup>
         <FormHelperText>The helper text</FormHelperText> */}
      </FormControl>
    </Box>
  );
}
