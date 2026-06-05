namespace main.cap.service;
service DatabaseService @(path: '/mainservice'){


  action checkConnection(
    sample : String
  ) returns String;

}