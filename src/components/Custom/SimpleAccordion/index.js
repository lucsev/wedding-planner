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

export default function SimpleAccordion() {

  const [accordionState] = React.useState({
    "accordionTranslations": [{"id": 1, "summary": "Do guests have to arrange their own transportation and lodging?", "details": "Yes. However, we have some suggestions (link to  suggestions question)"},
      {"id": 2, "summary": "false", "details": "false"},
      {"id": 3, "summary": "false", "details": "false"}
    ]
  });

  return (
    <>
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            FAQ
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
        <div>
        {accordionState?.accordionTranslations?.map((translation) =>
          <Accordion key={translation.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={translation.id}
          >
            <Typography>{translation.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {translation.details}
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
