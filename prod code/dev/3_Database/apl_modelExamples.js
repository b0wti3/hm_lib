// Contains a list of example MongoDB models used for athenaeum public library (APL)
let article = {
  name:"STRING",
  type:"STRING",
  _id:Date.now()+"NAME_STRING",
  content:{
    page:[
    [["header"],["nav"]"NAME_STRING",["body"],["footer"]]
    ]
  },
  stats:{
    author:"anonymous",
    created:new Date().toUTCString(),
    edited:new Date().toUTCString(),
    views:0,
    pages:1
  },
  tags:[
    
  ],
  access:{
    level:"guest",
    password:"optional",
    whitelist:false
  }
};

let list = {
  name:"STRING",
  type:"STRING",
  _id:Date.now()+"NAME_STRING",
  content:{
    page:[["header"],["nav"],"NAME_STRING",["body"],["footer"]]
  },
  stats:{
    author:"anonymous",
    created:new Date().toUTCString(),
    edited:new Date().toUTCString(),
    views:0
  },
  tags:[
    
  ],
  access:{
    level:"guest",
    password:"optional",
    whitelist:false
  }
};

let profile = {
  name:"STRING",
  type:"STRING",
  _id:Date.now()+"NAME_STRING",
  content:{
    summary:[["header"],["nav"],["body"],["footer"]],
    full:[["header"],["nav"],["body"],["footer"]]
  },
  stats:{
    created:new Date().toUTCString(),
    edited:new Date().toUTCString(),
    views:0
  },
  access:{
    level:"member",
    password:"optional",
    whitelist:false,
    group:false
  }
};

let user = {
  name:"STRING OF USERS NAME"
  level:"guest",
  group:false,
  password:"STRING",
  key:"NAME"+"PASSWORD",
    stats:{
      created: new Date().toUTCString(),
      verified: false
    }
};