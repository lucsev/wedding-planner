/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable */

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CheckboxFormGroup from "components/Custom/CheckboxFormGroup";
import DiscreteSliderValues from "components/Custom/DiscreteSliderValues";

import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

export default function ResponseForm({rsvpRerenderKey, setrsvpRerenderKey, rsvpData, setrsvpData}) {
  const { t } = useTranslation();  

  const handleAttendanceChange = (guestID, firstName, isAttending) => {
    var newState = { ...rsvpData };

    const index = newState.guests ? newState.guests.findIndex(object => object.guestID === guestID) : -1;
    const newValue = {"guestID": guestID, "firstName": firstName, "isAttending": isAttending};
    if(index === -1) {
      if(!newState.guests) { newState.guests = []; }
      newState.guests.push(newValue);
    }
    else { newState.guests[index] = newValue }
     console.log(newState);
     setrsvpData(newState);
  };

  const handleSpecialRequestsChange = (e) => {
    var newState = { ...rsvpData };
    newState.specialRequests = e.target.value;
    setrsvpData(newState);
  };

  const handleMusicSuggestionsChange = (e) => {
    var newState = { ...rsvpData };
    newState.musicSuggestions = e.target.value;
    setrsvpData(newState);
  };

  // console.log("Form responses", formResponses);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submit called');

    const apiUrl = 'https://wedding-api-7gclh5lvja-uc.a.run.app/api/rsvp';
    let formData = {
      guests: [],
      partyID: rsvpData.partyID,
      specialRequests: rsvpData.specialRequests,
      musicSuggestions: rsvpData.musicSuggestions,
  };
  rsvpData.guests.forEach(attendee => {
    formData.guests.push({ guestID: attendee.guestID, isAttending: attendee.isAttending });
  });
  console.log(formData);

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'partyCode': localStorage.getItem("guestCode"),
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setrsvpRerenderKey(!rsvpRerenderKey);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }


  if (rsvpData != null) {

    return (
      <MKBox component="section" py={2} >
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
            {t('rsvpTitle')}
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKTypography mb={1}>
          {parse(t('rsvpDescription'))}
            </MKTypography>
            <MKBox width="100%" component="form" onSubmit={formSubmitHandler} autocomplete="off">
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <CheckboxFormGroup rsvpData={rsvpData} handleAttendanceChange={handleAttendanceChange} />
                  </Grid>            
                  
                  <Grid item xs={12}>
                    <MKInput variant="standard" label={t('rsvpSpecialRequirementsLabel')} value={rsvpData.specialRequests} onChange={handleSpecialRequestsChange} multiline fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput variant="standard" label={t('rsvpMusicSuggestionsLabel')} value={rsvpData.musicSuggestions} onChange={handleMusicSuggestionsChange} fullWidth />
                  </Grid>

                  {/*
                  <Grid item xs={12} alignItems="center" ml={-1}>
                    <Switch checked={checked} onChange={handleChecked} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      onClick={handleChecked}
                    >
                      &nbsp;&nbsp;I am ok for my first name being shown in the attendee list&nbsp;
                    </MKTypography>
                  </Grid>
                  */}

                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                    {t('rsvpSubmit')}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    );
  }
  else {
     //Response not received yet
    return (<></>);
  }



  
}
