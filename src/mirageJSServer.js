/* eslint-disable */
import { createServer } from 'miragejs';

export function makeServer() {
  let server = createServer({
    routes() {
      this.urlPrefix = 'http://localhost:8080/api';
      this.namespace = "";
  
      this.get("/stats", () => {
        return {
            "UK": {
                "Family": {
                    "notConfirmed": 31,
                    "confirmedYes": 21,
                    "confirmedNo": 11,
                    "confirmedNotSure": 10,
                    "totalGBPDonated": 2000,
                    "avgGBPDonatedPerParty": 200
                },
                "Friends": {
                    "notConfirmed": 20,
                    "confirmedYes": 20,
                    "confirmedNo": 10,
                    "confirmedNotSure": 20,
                    "totalGBPDonated": 1000,
                    "avgGBPDonatedPerParty": 200
                }
            },
            "ES": {
                "Family": {
                    "notConfirmed": 42,
                    "confirmedYes": 22,
                    "confirmedNo": 12,
                    "confirmedNotSure": 5,
                    "totalGBPDonated": 1000,
                    "avgGBPDonatedPerParty": 100
                },
                "Friends": {
                    "notConfirmed": 43,
                    "confirmedYes": 23,
                    "confirmedNo": 13,
                    "confirmedNotSure": 20,
                    "totalGBPDonated": 3000,
                    "avgGBPDonatedPerParty": 150
                }
            }
        }
      });

      this.get("/rsvp", () => {
        return {
          "attendees": [
              {
                  "guestID": 1,
                  "firstName": "Ashley",
                  "isAttending": ""
              },
              {
                  "guestID": 2,
                  "firstName": "Lucas",
                  "isAttending": ""
              }
          ],
          "partyID": 1,
          "country": "UK",
          "group": "Family",
          "subGroup": "Groom & Groom",
          "eligibleToDonate": "no",
          "specialRequests": "",
          "musicSuggestions": "",
          "amountDonatedLocalCurrency": 0
      }
      });
    },
  });
  return server;
}

