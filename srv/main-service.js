const cds = require('@sap/cds');
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const { getDestination } = require('@sap-cloud-sdk/connectivity');

module.exports = class DatabaseService extends cds.ApplicationService {
async init() {

  // S4 via CAP
   this.on('checkConnection', async (req) => {
    const { sample1, sample2 } = req.data;
    console.log("cap received: " + sample1 + ", " + sample2);
    return "This is init: " + sample1 + ", " + sample2;

   });
   this.on('checkC4CConnection', async (req) => {
    const { caseuuid } = req.data;
    const url =`sap/c4c/api/v1/case-service/cases/${caseuuid}`;
    try{
            const caseResponse = await executeHttpRequest(
                { destinationName: "c4c_dev" },
                {
                    method: "GET",
                    url: url,
                    headers: {
                      "Accept": "application/json"
                    }                
                },
                { timeout: 10000 }
              ); 
              console.log("c4c response: " + JSON.stringify(caseResponse.data));
              return "c4c connection ok: " + caseuuid;
              } catch (error){
            console.log(error);   
            return "c4c connection NOT ok: " + error.message;
        }

   });
   
 
  await super.init();
  }
}