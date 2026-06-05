const cds = require('@sap/cds');

module.exports = async function () {

  // S4 via CAP
   this.on('checkConnection', async (req) => {
    const { sample } = req.data;
    console.log("cap received: " + sample);
    return "Hello from CAP: " + sample;

   });
}