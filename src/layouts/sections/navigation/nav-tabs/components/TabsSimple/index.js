/* eslint-disable */
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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import RsvpFAQAccordion from "components/Custom/rsvpFAQAccordion";
import TravelFAQAccordion from "components/Custom/travelFAQAccordion";
import OnTheDayFAQAccordion from "components/Custom/onTheDayFAQAccordion";
import MKTypography from "components/MKTypography";
import { useTranslation } from 'react-i18next';
import autocomplete from "assets/theme/components/form/autocomplete";
import MKBox from "components/MKBox";

function TabsSimple({appLanguage, setAppLanguage}) {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <MKBox component="section" py={2}>
    <Container>
      <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1} sx = {{ padding: "0px 0px 6px 0px" }}>
          {t('faqTitle')}
          </MKTypography>
        </Grid>
      <Grid container item justifyContent="center" xs="auto" lg={6} mx="auto">
        <AppBar position="static">
          <Tabs value={activeTab} onChange={handleTabType}>
            <Tab label="RSVP" />
            <Tab label="Travel" />
            <Tab label="On The Day" />
          </Tabs>
        </AppBar>
      </Grid>
      <div hidden={activeTab !== 0}>
      <RsvpFAQAccordion  appLanguage={appLanguage} setAppLanguage={setAppLanguage} />
      </div>
      <div hidden={activeTab !== 1}>
      <TravelFAQAccordion  appLanguage={appLanguage} setAppLanguage={setAppLanguage} />
      </div>
      <div hidden={activeTab !== 2}>
      <OnTheDayFAQAccordion  appLanguage={appLanguage} setAppLanguage={setAppLanguage} />
      </div>
      
    </Container>
    </MKBox>
    
  );
}

export default TabsSimple;
