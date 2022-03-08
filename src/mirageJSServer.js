/* eslint-disable */
import { createServer } from 'miragejs';

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api"
  
      this.get("/stats", () => {
        return {
            "UK": {
                "Friends": {
                    "noResponse": 40,
                    "confirmedYes": 20,
                    "confirmedNo": 10,
                    "totalGBPDonated": 2000,
                    "avgDonationPerPerson": 300,
                    "percentageAttendeesWhoDonated": 65
                },
                "Family": {
                    "noResponse": 40,
                    "confirmedYes": 20,
                    "confirmedNo": 10,
                    "totalGBPDonated": 2000,
                    "avgDonationPerPerson": 300,
                    "percentageAttendeesWhoDonated": 65
                }
            },
            "ES": {
                "Friends": {
                    "noResponse": 40,
                    "confirmedYes": 20,
                    "confirmedNo": 10,
                    "totalGBPDonated": 2000,
                    "avgDonationPerPerson": 300,
                    "percentageAttendeesWhoDonated": 65
                },
                "Family": {
                    "noResponse": 40,
                    "confirmedYes": 20,
                    "confirmedNo": 10,
                    "totalGBPDonated": 2000,
                    "avgDonationPerPerson": 300,
                    "percentageAttendeesWhoDonated": 65
                }
            }
        }
      })
    },
  });
  return server;
}

