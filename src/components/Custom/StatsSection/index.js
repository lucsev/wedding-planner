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

class StatsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [{
          name: 'Confirmed',
          data: [44, 55, 41, 67],
          color: "#4CAF50"
        }, {
          name: 'No Response',
          data: [13, 23, 20, 8],
          color: "#1A73E8"
        }, {
          name: 'Declined',
          data: [11, 17, 15, 15],
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
            text: "Attendee RSVP",
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
            categories: ['UK Friends', 'UK Family', 'ES Friends', 'ES Family'
            ],
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        },
      
      
      };
    }

  componentDidMount() {
    const apiUrl = '/api/stats';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
      console.log('Stats: ', data);
      const newSeries = [{
        name: 'Confirmed',
        data: [data.UK.Friends.confirmedYes, data.UK.Family.confirmedYes, data.ES.Friends.confirmedYes, data.ES.Family.confirmedYes],
        color: "#4CAF50"
      }, {
        name: 'No Response',
        data: [data.UK.Friends.notConfirmed, data.UK.Family.notConfirmed, data.ES.Friends.notConfirmed, data.ES.Family.notConfirmed],
        color: "#1A73E8"
      }, {
        name: 'Declined',
        data: [data.UK.Friends.confirmedNo, data.UK.Family.confirmedNo, data.ES.Friends.confirmedNo, data.ES.Family.confirmedNo],
        color: "#fb8c00"
      }];
      console.log(newSeries);
      this.setState({ series: newSeries })
    });
  }

  render() {
    return (
        <><MKBox component="section" py={12}>
            <Container>
                <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
                    <MKTypography variant="h3" mb={1}>
                        Stats
                    </MKTypography>
                </Grid>
                <div id="chart">
  <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>
            </Container>
        </MKBox></>
    );
  }
}

export default StatsSection;