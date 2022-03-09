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

export default function CheckboxFormGroup({rsvpData, handleAtendeeChange}) {
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

  const handleRadioChange = (guestID, attendingValue) => {
    console.log(guestID," " , attendingValue);
    console.log(handleAtendeeChange);
    handleAtendeeChange(guestID, attendingValue);
  };

  const { gilad, jason, antoine } = state;

  // console.log('Radio group:', rsvpData);

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel focused={false}>Who is coming?</FormLabel>
        {rsvpData?.attendees?.map((attendee, index) =>
          <FormControl key={attendee.guestID}>
          <FormLabel focused={false} id="demo-radio-buttons-group-label">{attendee.firstName}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={e=>handleRadioChange(attendee.guestID, e.target.value)}
            defaultValue={attendee.isAttending}
          >
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="notsure" control={<Radio />} label="Not sure" />
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          </RadioGroup>
        </FormControl>

        )}        

      </FormControl>
    </Box>
  );
}
