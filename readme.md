///HYBRID TESTING, connect to destinations (Cloud and onPrem)

1.bind xsua, destination and connectivity service
cds bind --to capui5-xsuaa
cds bind --to capui5-destination-service
cds bind --to capui5-connectivity-service


2.update .cdsrc-private.json, add destinations
{
  "requires": {
    "SAP_ONPREM": {
      "kind": "odata-v2",
      "credentials": {
        "url": "http://SAP_ONPREM.dest",
        "path": "/sap/opu/odata/sap/API_BUSINESS_PARTNER",
        "proxyConfiguration": {
          "host": "127.0.0.1",
          "port": 8887,
          "protocol": "http"
        }
      }
    },
    "SAP_C4C: {
      "kind": "rest",
      "credentials": {
        "path": "/sap/c4c/api/v1",
        "destination": "SAP_C4C"
      }
    },
    "[hybrid]": { ...

    

3.run with profile
cds watch --profile hybrid


4.test call
  const api = await cds.connect.to('DESTINATION');
      const result = await api.send({
        method: 'GET',
        path: '/path/...'
      });
