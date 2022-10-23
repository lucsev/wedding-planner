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

import HotelCarousel from "components/Custom/HotelCarousel"

function TravelSection() {
  const { t } = useTranslation();

  return (
    <MKBox component="section" py={6} my={6} sx={{ margin: "0px", padding: "12px 0px 12px 0px" }}  >
      <Container>
      <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1} sx = {{ padding: "0px 0px 6px 0px" }}>
          {t('travelSectionTitle')}
          </MKTypography>
          <MKTypography mb={1} sx = {{ padding: "0px 0px 6px 0px" }}>
          The wedding is in Spain. Guests need to arrange their own transportation and accommodation.
          </MKTypography>
        </Grid>
        <Grid container item xs={11} spacing={2} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={12} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="location_on"
                  title="In Seville, Spain"
                  description="At the Alfonso XIII hotel."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="calendar_month"
                  title="May 2024"
                  description="Exact date to be confirmed."
                />
              </Grid>
            </Grid>
            {/* <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Save Time & Money"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid> */}

             {/*<Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center" sx={{ padding: "12px 0px 0px 0px" }}>
          <MKTypography variant="h3" mb={1}>
          Stay tuned!
          </MKTypography>
        </Grid>*/}
          </Grid>
         
        </Grid>
        <HotelCarousel />
      </Container>
    </MKBox>
  );
}

export default TravelSection;
