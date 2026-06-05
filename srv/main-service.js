const cds = require('@sap/cds');

module.exports = async function () {

  // S4 via CAP
   this.on('checkConnection', async (req) => {
    const { sample1, sample2 } = req.data;
    console.log("cap received: " + sample1 + ", " + sample2);
    return "Hello from CAP: " + sample1 + ", " + sample2;

   });
}