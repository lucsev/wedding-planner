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

import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

import i18n from 'i18n';
import { useTranslation } from 'react-i18next';

// Images
import bgImage from "assets/images/Custom/plaza-de-espana-looking-out.jpg";

function WeddingSignIn({setGuestCodeIsValidParent, setrsvpData, setAppLanguage, spanishSignIn}) {
  //const [rememberMe, setRememberMe] = useState(false);
  const [guestCodeInput, setGuestCodeInput] = useState('');
  const [guestCodeIsValid, setGuestCodeIsValid] = useState('');
  const [showErrorCodeNotInput, setShowErrorCodeNotInput] = useState(false);
  const [showErrorCodeNotFound, setShowErrorCodeNotFound] = useState(false);
  const [showErrorSystemFailure, setShowErrorSystemFailure] = useState(false);
  const { t } = useTranslation();
  

  useEffect(() => {
    if(spanishSignIn) {
      i18n.changeLanguage("es");
      setAppLanguage("es");
    }

    if (localStorage.getItem("guestCode")) {
      //setGuestCodeInput(localStorage.getItem("guestCode"));
      callSignInAPI(true);
    }
  }, []); // Never re-run useEffect

  const handleGuestCodeInputChange = event => {
    setGuestCodeInput(event.target.value);
  };

  const callSignInAPI = (isStartUpCall) => {
    const apiUrl = 'https://wedding-api-7gclh5lvja-uc.a.run.app/api/rsvp';

    if (guestCodeInput.length < 3 && !isStartUpCall) {
      setShowErrorCodeNotInput(true);
      setShowErrorCodeNotFound(false);
      setShowErrorSystemFailure(false);
      return;
    } else {
      setShowErrorCodeNotInput(false);
    }

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'partyCode': isStartUpCall ? localStorage.getItem("guestCode") : guestCodeInput,
      },
    })
    .then(response => {
      console.log(response);
      if(response.status == 200) {
        setShowErrorCodeNotFound(false);
        setShowErrorSystemFailure(false);
        return response.json();
      }
      else {
        if(!isStartUpCall) {
          // I won't show error messages if the API call is triggered automatically without user intervention
          if (response.status == 404) {
          // Guest code is incorrect. Please check the code or check with the grooms
          setShowErrorCodeNotFound(true);
          } else {
          // Something went wrong, please check with the grooms
          setShowErrorSystemFailure(true);
          }
        }
        return Promise.reject(response);
      }
    })
    .then(data => {
      console.log('Success:', data);
      setrsvpData(data);
      if(data.country == "ES") {
        i18n.changeLanguage("es");
        setAppLanguage("es");
      } else {
        i18n.changeLanguage("en");
        setAppLanguage("en");
      }
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem("guestCode", guestCodeInput ? guestCodeInput : localStorage.getItem("guestCode") );
        setGuestCodeIsValid(true);
        setGuestCodeIsValidParent(true);
      } else {
        // Sorry! No Web Storage support..
      }
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    callSignInAPI(false);
  }

  return (
    <div style={{display: guestCodeIsValid ? 'none' : 'block' }}>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                {t('signInWelcomeTitle')}
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="text" label={t('signInGuestCode')} fullWidth onChange={handleGuestCodeInputChange} />
                  </MKBox>

                  <div style={{display: showErrorCodeNotInput ? 'block' : 'none' }}>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="error">
                      {t('signInErroNoInput')}
                    </MKTypography>
                  </MKBox>
                  </div>

                  <div style={{display: showErrorCodeNotFound ? 'block' : 'none' }}>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="error">
                    {t('signInErrorWrongCode')}
                    </MKTypography>
                  </MKBox>
                  </div>

                  <div style={{display: showErrorSystemFailure ? 'block' : 'none' }}>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="error">
                    {t('signInErrorSystemFailure')}
                    </MKTypography>
                  </MKBox>
                  </div>

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
                    {t('signInEnterButton')}
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      {t('signInDontHaveACode')}
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </div>
  );
}

export default WeddingSignIn;
