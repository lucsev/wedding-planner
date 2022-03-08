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
                    "notConfirmed": 40,
                    "confirmedYes": 20,
                    "confirmedNo": 10,
                    "totalGBPDonated": 1000,
                    "avgGBPDonationPerPerson": 150,
                    "percentageAttendeesWhoDonated": 65
                },
                "Family": {
                    "notConfirmed": 41,
                    "confirmedYes": 21,
                    "confirmedNo": 11,
                    "totalGBPDonated": 3000,
                    "avgGBPDonationPerPerson": 300,
                    "percentageAttendeesWhoDonated": 65
                }
            },
            "ES": {
                "Friends": {
                    "notConfirmed": 42,
                    "confirmedYes": 22,
                    "confirmedNo": 12,
                    "totalGBPDonated": 1000,
                    "avgGBPDonationPerPerson": 150,
                    "percentageAttendeesWhoDonated": 65
                },
                "Family": {
                    "notConfirmed": 43,
                    "confirmedYes": 23,
                    "confirmedNo": 13,
                    "totalGBPDonated": 3000,
                    "avgGBPDonationPerPerson": 300,
                    "percentageAttendeesWhoDonated": 65
                }
            }
        }
      });

      this.get("/rsvp", () => {
        return {
            "attendees": [
              {"guestID": 1, "firstName":"Mr. A", "isAttending": null},
              {"guestID": 2, "firstName":"Mr. B", "isAttending": null},
              {"guestID": 3, "firstName":"Mr. C", "isAttending": null}
            ],
            "canDonate": true,
            "specialRequests": null,
            "country": "UK",
            "consentToShowNameInAttendeeList": null,
            "amountDonatedLocalCurrency": 200
          }
      });
    },
  });
  return server;
}

