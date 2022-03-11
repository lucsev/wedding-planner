/* eslint-disable */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import translations from "public/translations/translations"
import i17n from 'i18n';
import i18next from "i18next";
import parse from 'html-react-parser';

export default function SimpleAccordion({appLanguage}) {
  
  const faqTranslations = translations[appLanguage].translation;
  console.log(faqTranslations);

  return (
    <>
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
          {faqTranslations["faqTitle"]}
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
        <div>
        {faqTranslations?.faqAccordion.map((translation, index) =>
          <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={translation.id}
          >
            <Typography>{translation.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {parse(translation.detail)}
            </Typography>
          </AccordionDetails>
        </Accordion>
        )}

    </div>
        </Grid>
      </Container>
    </MKBox>
    </>
  );
}
