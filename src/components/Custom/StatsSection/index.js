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
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['UK Friends', 'UK Family', 'ES Friends', 'ES Family']
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50]
        }
      ]
    };
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
                <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="500" />
                    </div>
                </div>
            </div>
            </Container>
        </MKBox></>
    );
  }
}

export default StatsSection;