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
import { useTranslation } from 'react-i18next';

export default function CheckboxFormGroup({rsvpData, handleAttendanceChange}) {
  const { t } = useTranslation();
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

  const handleRadioChange = (guestID, firstName, attendingValue) => {
    console.log(guestID," " , attendingValue);
    handleAttendanceChange(guestID, firstName, attendingValue);
  };

  const { gilad, jason, antoine } = state;

  //console.log('Radio group re-render:', rsvpData);

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel focused={false}>{t('rsvpWhosComing')}</FormLabel>
        {rsvpData?.guests?.map((guest, index) =>
          <FormControl key={guest.guestID}>
          <FormLabel focused={false} id="demo-radio-buttons-group-label">{guest.firstName}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={e=>handleRadioChange(guest.guestID, guest.firstName, e.target.value)}
            value={guest.isAttending}
          >
            <FormControlLabel value="no" control={<Radio />} label={t('rsvpResponseNo')} />
            <FormControlLabel value="notsure" control={<Radio />} label={t('rsvpResponseNotSure')} />
            <FormControlLabel value="yes" control={<Radio />} label={t('rsvpResponseYes')} />
          </RadioGroup>
        </FormControl>

        )}        

      </FormControl>
    </Box>
  );
}
