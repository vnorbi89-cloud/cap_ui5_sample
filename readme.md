///connect to destinations

1.bind
cds bind --to capui5-xsuaa
cds bind --to capui5-destination-service

2.update package-lock.json, add destinations

3.run with profile
cds watch --profile hybrid

4.test call
  const api = await cds.connect.to('DESTINATION');
      const result = await api.send({
        method: 'GET',
        path: '/path/...'
      });


5.update package.json
"cds": {
    "requires": {    
       "DESTINATION": {
        "kind": "odata", ///"rest"
        "credentials": {
          "path": "/sap/api/...",
          "destination": "BTP destination name"
        }
      }
    }
}