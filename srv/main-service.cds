namespace main.cap.service;
service DatabaseService @(path: '/mainservice'){


  @requires: 'TestScope1'
  action checkConnection(
    sample1 : String,
    sample2 : String
  ) returns String;
  
  //@requires: 'TestScope1'
  action checkC4CConnection(
    caseuuid : String
  ) returns String;

  
  action testFact()
  returns {
    displayId: String;
      subject : String;
      origin : String;
      priority : String;
  };

}