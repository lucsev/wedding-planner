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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import MKTypography from "components/MKTypography";
import { useTranslation } from 'react-i18next';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useEffect } from 'react';

import HotelCarousel from "components/Custom/HotelCarousel"
import parse from 'html-react-parser';

function OnTheDaySection() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "weatherwidget.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <MKBox component="section" py={6} my={6} sx={{ margin: "0px", padding: "12px 0px 12px 0px" }}  >
      <Container>
      <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1} sx = {{ padding: "0px 0px 6px 0px" }}>
          {t('onTheDaySectionTitle')}
          </MKTypography>
          <MKTypography variant="body2" mb={1} sx = {{ padding: "0px 0px 6px 0px" }}>
          {parse(t('onTheDaySectionDescription'))}
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OnTheDaySection;
