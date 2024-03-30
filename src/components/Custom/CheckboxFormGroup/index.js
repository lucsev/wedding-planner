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

  const handleRadioChange = (guestID, firstName, attendingValue, starter, main, dessert) => {
    console.log(guestID," " , attendingValue);
    handleAttendanceChange(guestID, firstName, attendingValue, starter, main, dessert);
  };

  const { gilad, jason, antoine } = state;

  //console.log('Radio group re-render:', rsvpData);

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel focused={false}>{t('rsvpWhosComing')}</FormLabel>
        {rsvpData?.guests?.map((guest, index) =>
          <FormControl key={guest.guestID}>
          <FormLabel sx={{ mt: 2 }} focused={false} id="demo-radio-buttons-group-label">{guest.firstName}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={e=>handleRadioChange(guest.guestID, guest.firstName, e.target.value, guest.starter, guest.main, guest.dessert)}
            value={guest.isAttending}
          >
            <FormControlLabel value="No" control={<Radio />} label={t('rsvpResponseNo')} />
            <FormControlLabel value="Not sure" control={<Radio />} label={t('rsvpResponseNotSure')} />
            <FormControlLabel value="Yes" control={<Radio />} label={t('rsvpResponseYes')} />
          </RadioGroup>

          <br/>
          <FormLabel sx={{fontSize: "0.9rem"}} focused={false} id="demo-radio-buttons-group-label">{t('rsvpStarter')}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="starters-radio-buttons-group"
            onChange={e=>handleRadioChange(guest.guestID, guest.firstName, guest.isAttending, e.target.value, guest.main, guest.dessert)}
            value={guest.starter}
          >
            <FormControlLabel value="arroz-meloso" control={<Radio />} label={t('rsvpStarter1')} />
            <FormControlLabel value="bacalao" control={<Radio />} label={t('rsvpStarter2')} />
            <FormControlLabel value="different" control={<Radio />} label={t('rsvpStarter3')} />
          </RadioGroup>

          <br/>
          <FormLabel sx={{fontSize: "0.9rem"}} focused={false} id="demo-radio-buttons-group-label">{t('rsvpMain')}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="mains-radio-buttons-group"
            onChange={e=>handleRadioChange(guest.guestID, guest.firstName, guest.isAttending, guest.starter, e.target.value, guest.dessert)}
            value={guest.main}
          >
            <FormControlLabel value="lubina" control={<Radio />} label={t('rsvpMain1')} />
            <FormControlLabel value="roast-beef" control={<Radio />} label={t('rsvpMain2')} />
            <FormControlLabel value="different" control={<Radio />} label={t('rsvpStarter3')} />
          </RadioGroup>

          <br/>
          <FormLabel sx={{fontSize: "0.9rem"}} focused={false} id="demo-radio-buttons-group-label">{t('rsvpDessert')}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="dessert-radio-buttons-group"
            onChange={e=>handleRadioChange(guest.guestID, guest.firstName, guest.isAttending, guest.starter, guest.main, e.target.value)}
            value={guest.dessert}
          >
            <FormControlLabel value="apple" control={<Radio />} label={t('rsvpDessert1')} />
            <FormControlLabel value="brownie" control={<Radio />} label={t('rsvpDessert2')} />
            <FormControlLabel value="different" control={<Radio />} label={t('rsvpStarter3')} />
          </RadioGroup>

        </FormControl>

        )}        

      </FormControl>
    </Box>
  );
}
