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
import i18n from 'i18n';

export default function ResponseForm({appLanguage, setAppLanguage}) {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  const [searchParams] = useSearchParams();
  // console.log(`The code is:${searchParams.get('code')}`);

  const [rsvpData, setrsvpData] = useState();
  const [donationAmount, setDonationAmount] = useState(0);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/rsvp';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setrsvpData(data);
        setDonationAmount(data.amountDonatedLocalCurrency);
         // console.log('GET RSVP: ', data);
        if(data.country == "ES") {
          i18n.changeLanguage("es");
          setAppLanguage("es");
        }
    });
  }, []);

  const handleAtendeeChange = (guestID, isAttending) => {
    var newState = rsvpData;

    const index = newState.attendees ? newState.attendees.findIndex(object => object.guestID === guestID) : -1;
    const newValue = {"guestID": guestID, "isAttending": isAttending};
    if(index === -1) {
      if(!newState.attendees) { newState.attendees = []; }
      newState.attendees.push(newValue);
    }
    else { newState.attendees[index] = newValue }
    // console.log(newState);
    setrsvpData(newState);
  };

  // console.log("Form responses", formResponses);

  const formSubmitHandler = (e) => {
    console.log('submit called');

    const apiUrl = 'http://localhost:8080/rsvp';
    let formData = {
      attendees: [
          {
              guestID: 1,
              isAttending: "yes"
          },
          {
              guestID: 2,
              isAttending: "yes"
          }
      ],
      partyID: 1,
      specialRequests: "AAA",
      musicSuggestions: "BBB",
      amountDonatedLocalCurrency: 1000
  };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'partyCode': 'mT2pw',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    e.preventDefault();
  }

  let defaultDonationAmount = 0;
  if (rsvpData != undefined && rsvpData.hasOwnProperty('amountDonatedLocalCurrency')) {
    defaultDonationAmount = rsvpData.amountDonatedLocalCurrency;

    return (
      <MKBox component="section" py={12}>
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
            {t('rsvpTitle')}
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" onSubmit={formSubmitHandler} autocomplete="off">
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <CheckboxFormGroup rsvpData={rsvpData} handleAtendeeChange={handleAtendeeChange} />
                  </Grid>
                  <Grid item xs={12}>
                  <DiscreteSliderValues donationAmount={donationAmount} defaultDonationAmount={defaultDonationAmount} setDonationAmount={setDonationAmount} country={rsvpData.country} />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <MKInput variant="standard" label={t('rsvpSpecialRequirementsLabel')} multiline fullWidth rows={6} />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput variant="standard" label="Music Suggestions" fullWidth />
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
