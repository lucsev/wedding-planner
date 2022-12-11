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

// Images
import bgImage from "assets/images/Custom/plaza-de-espana-looking-out.jpg";

function WeddingSignIn({setGuestCodeIsValidParent}) {
  //const [rememberMe, setRememberMe] = useState(false);
  const [guestCodeInput, setGuestCodeInput] = useState('');
  const [guestCodeIsValid, setGuestCodeIsValid] = useState('');

  useEffect(() => {
    ////TODO Call API to validate guest code from local storage
    if (localStorage.getItem("guestCode")) {
      setGuestCodeInput(localStorage.getItem("guestCode"));
      callSignInAPI();
    }
  }, []); // Never re-run useEffect

  const handleGuestCodeInputChange = event => {
    setGuestCodeInput(event.target.value);
  };

  const callSignInAPI = () => {
    const apiUrl = 'http://localhost:8080/api/rsvp';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'partyCode': guestCodeInput,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem("guestCode", guestCodeInput ? guestCodeInput : localStorage.getItem("guestCode") );
        setGuestCodeIsValid(true);
        setGuestCodeIsValidParent(true);
        //TODO Make component fade out with an animation
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
    callSignInAPI();
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
                  Welcome!
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="text" label="Guest Code" fullWidth onChange={handleGuestCodeInputChange} />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleSubmit} >
                      Enter
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have a code? Contact the grooms!
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
