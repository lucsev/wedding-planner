/*
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
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import TheWedding from "pages/Presentation/sections/TheWedding";
import TravelSection from "pages/Presentation/sections/TravelSection";
import OnTheDaySection from "pages/Presentation/sections/OnTheDaySection";
import PreWeddingSection from "pages/Presentation/sections/PreWeddingSection";
import WhatToDoSection from "pages/Presentation/sections/WhatToDoSection";

import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/Custom/PXL_20220913_163333548.MP.jpg";
import rsvpBackground from "assets/images/Custom/rsvp-web-3.png";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import ResponseForm from "components/Custom/ResponseForm";
import StatsSection from "components/Custom/StatsSection";
import { useTranslation } from 'react-i18next';
import { StrictMode} from "react";
import { useState } from "react";
import TabsSimple from "layouts/sections/navigation/nav-tabs/components/TabsSimple";
import WeddingSignIn from "pages/LandingPages/WeddingSignIn"

const theme = createTheme({
  typography: {
    fontFamily: [
      "Fake Serif",
      "sans-serif",
    ].join(","),
    fontSize: 12,
  },
});

const theme2 = createTheme({
  typography: {
    fontFamily: [
      "Fake Serif",
      "sans-serif",
    ].join(","),
   fontSize: 12,
  },
});

export default function Presentation({appLanguage, setAppLanguage, spanishSignIn}) {
  const { t } = useTranslation();
  const [rsvpInitialised, setrsvpInitialised] = useState(false);
  const [rsvpRerenderKey, setrsvpRerenderKey] = useState(false);
  
  const [guestCodeIsValid, setGuestCodeIsValidParent] = useState('');
  const [rsvpData, setrsvpData] = useState();

  const handleSignout = () => {
    localStorage.removeItem("guestCode");
    window.location.reload();
  };

  return (
    
    <>
    {/*
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      */}
      <WeddingSignIn setGuestCodeIsValidParent={setGuestCodeIsValidParent} setrsvpData={setrsvpData} setAppLanguage={setAppLanguage} spanishSignIn={spanishSignIn} />
      <div style={{display: guestCodeIsValid ? 'block' : 'none' }}>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container sx={{backgroundImage: `unset`,}}>
          <Grid container justifyContent="center" mx="auto">
          <Grid item xs={12} justifyContent="center" mx="auto">
          
              <MKTypography
                variant="h1"
                mt={-6}
                mb={-3}
                textAlign="center"
                sx={({ breakpoints }) => ({
                  paddingTop: '280px',
                  
                  typography: {
                    fontFamily: [
                      "Fake Serif",
                      "sans-serif",
                    ].join(","),
                   color: "white",
                   fontSize: 80,
                   fontWeight: 10,
                   [breakpoints.down("sm")]: {
                    fontSize: 55,
                    marginBottom: -15,
                   },
                  },          
                })}
              >
                {t('mainTitle')}
              </MKTypography>
              
            
            </Grid>
            <Grid item xs={12} justifyContent="center" mx="auto">
            <MKTypography
                variant="body1"
                mb={1}
                textAlign="center"
                sx={({ breakpoints }) => ({
                  paddingTop: '0px',
                  
                  typography: {
                    fontFamily: [
                      "Fake Serif",
                      "sans-serif",
                    ].join(","),
                   color: "white",
                   fontSize: 70,
                   fontWeight: 10,
                   [breakpoints.down("sm")]: {
                    fontSize: 48,
                   },
                  },          
                })}
              >
                {t('mainSignature')}
              </MKTypography>
            
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <TheWedding />
      </Card>
      <div style={{padding: 20}}></div>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundImage: `url(${rsvpBackground})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <ResponseForm rsvpRerenderKey={rsvpRerenderKey} setrsvpRerenderKey={setrsvpRerenderKey} rsvpData={rsvpData} setrsvpData={setrsvpData} />
        </Card>
        <div style={{padding: 20}}></div>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <TravelSection />
      </Card>
      <div style={{padding: 20}}></div>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <OnTheDaySection />
      </Card>
      <div style={{padding: 20}}></div>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <PreWeddingSection />
      </Card>
      <div style={{padding: 20}}></div>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <WhatToDoSection />
      </Card>
        {/*<div style={{padding: 20}}></div>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <TabsSimple appLanguage={appLanguage} setAppLanguage={setAppLanguage} />
        
        {rsvpInitialised === true && 
        <StatsSection appLanguage={appLanguage} rsvpRerenderKey={rsvpRerenderKey} />
        }
      </Card>
      
      <div style={{padding: 20}}></div>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      

      </Card> */}

          <MKBox mt={3} mb={1} textAlign="center">
              <MKTypography variant="button" onClick={handleSignout}>
              <a href="/">{t('signOutLink')}</a>
              </MKTypography>
          </MKBox>
      </div>
    </>
  );
}

