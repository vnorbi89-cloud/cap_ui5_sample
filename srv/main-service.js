const cds = require('@sap/cds');
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const { getDestination } = require('@sap-cloud-sdk/connectivity');

module.exports = class DatabaseService extends cds.ApplicationService {
async init() {

  // S4 via CAP
   this.on('checkConnection', async (req) => {
    const { sample1, sample2 } = req.data;
     const { user } = req;
    console.log("cap received: " + sample1 + ", " + sample2);

//console.log("user:", user);



    return "This is init: " + sample1 + ", " + sample2;

   });
   this.on('checkC4CConnection', async (req) => {
    const { caseuuid } = req.data;
    console.log("checkC4CConnection action called");
    
      const api = await cds.connect.to('DLW_C4C');
      const result = await api.send({
        method: 'GET',
        path: `/case-service/cases/${caseuuid}` 
      });
      console.log("C4C Response:", result.subject);
      return {
        displayId: result.displayId,
        subject: result.subject,
        origin: result.origin,
        priority: result.priorityDescription
      };


   });
   
    this.on('testFact', async (req) => {
    console.log("fact action called");
    
      const api = await cds.connect.to('API_FACT');
      const result = await api.send({
        method: 'GET',
        path: '/random'
      });
      return result.text;

   });

 
  await super.init();
  }
}