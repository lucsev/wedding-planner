/* eslint-disable */
import React, { Component } from "react";
import Chart from "react-apexcharts";

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
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function StatsSection ({appLanguage}) {

  const { t } = useTranslation();
  const [state, setState] = useState();

  useEffect(() => {
    const apiUrl = '/api/stats';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
      console.log('Stats: ', data);
      console.log(t('statsRsvpChartConfirmedYes'));
      console.log(t('statsRsvpChartUKFriends') );

      setState({
        rsvpChart: {
        series: [{
          name: t('statsRsvpChartConfirmedYes'),
          data: [data.UK.Friends.confirmedYes, data.UK.Family.confirmedYes, data.ES.Friends.confirmedYes, data.ES.Family.confirmedYes],
          color: "#4CAF50"
        }, {
          name: t('statsRsvpChartUnconfirmed'),
          data: [data.UK.Friends.notConfirmed, data.UK.Family.notConfirmed, data.ES.Friends.notConfirmed, data.ES.Family.notConfirmed],
          color: "#1A73E8"
        }, {
          name: t('statsRsvpChartConfirmedNo'),
          data: [data.UK.Friends.confirmedNo, data.UK.Family.confirmedNo, data.ES.Friends.confirmedNo, data.ES.Family.confirmedNo],
          color: "#fb8c00"
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          title: {
            text: t('statsRsvpChartTitle'),
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              fontFamily:  undefined,
              color:  '#263238'
            },
        },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
          },
          xaxis: {
            type: 'string',
            categories: [t('statsRsvpChartUKFriends'), t('statsRsvpChartUKFamily'), t('statsRsvpChartESFriends'), t('statsRsvpChartESFamily') ],
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        },
      
      
      },
      donationsChart: {
        series: [{
          name: t('statsDonationsChartFriends'),
          data: [44, 55, 41, 67],
          color: "#4CAF50"
        },
        {
          name: t('statsDonationsChartFamily'),
          data: [44, 55, 41, 67],
          color: "#1A73E8"
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          title: {
            text: t('statsDonationsChartTitle'),
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              fontFamily:  undefined,
              color:  '#263238'
            },
        },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
          },
          xaxis: {
            type: 'string',
            categories: ['UK', 'ES', t('statsDonationsChartUKPerPerson'), t('statsDonationsChartESPerPerson') ],
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        },
      
      
      }
    });

    });
  }, []);

  return (
    <>
    <MKBox component="section" py={12}>
        <Container>
            <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
                <MKTypography variant="h3" mb={1}>
                { t('statsTitle') }
                </MKTypography>
            </Grid>
            <div id="chart"> {state?.rsvpChart ?
            <>
            <Chart options={state.rsvpChart.options} series={state.rsvpChart.series} type="bar" height={350} />
            <Chart options={state.donationsChart.options} series={state.donationsChart.series} type="bar" height={350} />
            </>
            : <></> }
</div>
        </Container>
    </MKBox></>
);

}