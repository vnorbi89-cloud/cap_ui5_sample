namespace main.cap.service;
service DatabaseService @(path: '/mainservice'){


  @requires: 'TestScope1'
  action checkConnection(
    sample1 : String,
    sample2 : String
  ) returns String;

}