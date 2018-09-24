// Contains a list of 4 MongoDB models to be used for the athenaeum public library (APL) Service
///Article Model
let article = {
  _id:'MONGO_GENERATED',
  access:{
    authenticate:false, //whether to require a user to be authenticated to see the article
    group:'STRING', //whether a user needs to be part of a specific group to view content
    role:'guest', //the role that is required for a user to view an article ['guest','member','admin'] (guest === public access)
    whitelist:false //whether there are only specific users ('name') allowed to access an article or not (false)
  },
  content:{
    page:[ //the page content of the article (an article can have up to 10 pages)
    [['header'],['nav'],['name'],['body'],['footer']] //each page will be limited to a certain character limit
    ]
  },
  name:'STRING', //name assigned to article upon creation
  stats:{
    author:'anonymous', //user that created the list (can be set to 'anonymous' to revoke edit access and anonymize source)
    created:new Date().toUTCString(), //date article was first created
    edited:new Date().toUTCString(), //date of last update to the article
    pages:1, //page limit is 10, and cannot go beyond that
    views:0 //total views accumilated
  },
  tags:[
    
  ],
  type:'STRING' //['lore','fiction','help','tutorial','manual']
};

///List Model
let list = {
  _id:'MONGO_GENERATED',
  access:{
    authenticate:false, //whether to require a user to be authenticated to see the list
    group:'STRING', //whether a user needs to be part of a specific group to view content
    role:'guest', //the role that is required for a user to view a list ['guest','member','admin'] (guest === public access)
    whitelist:false //whether there are only specific users ('name') allowed to access a list or not (false)
  },
  content:{
    page:[['header'],['nav'],['name'],['body'],['footer']] // the page content of list (lists only have one page)
  },
  name:'STRING', // name assigned to list upon creation
  stats:{
    author:'anonymous', //user that created the list (can be set to 'anonymous' to revoke edit access and anonymize source)
    created:new Date().toUTCString(), //date list was first created
    edited:new Date().toUTCString(), //date of last update to the list
    views:0 //total views accumilated
  },
  tags:[
    'oog','ig','beginners','scams','famous' //further filters through lists combined with list type
  ],
  type:'STRING' //['tools','puzzles','games','memes','links']
};

///Profile Model
let profile = {
  _id:'MONGO_GENERATED',
  access:{
    authenticate:true, //whether the user accessing the profile is required to authenticate before access
    group:'STRING', //whether a user needs to be part of a specific group to view content
    role:'member', //the role that is required for a user to view this user profile ['guest','member','admin'] (guest === public access)
    whitelist:false //whether there are only specific users ('name') allowed to access profile or not (false)
  },
  content:{
    //NOTE: Any and all information about a sentience or intelligence may be stored except for IRL PII or HIPPA
    supp:[['header'],['nav'],['name'],['body'],['footer']] //Stratigic Unique Personal Profile (SUPP): contains stratigic ig information about a user
    upp:[['header'],['nav'],['name'],['body'],['footer']], //Unique Personal Profile (UPP): contains general information about a user
  },
  name:'STRING', //name of the user that the profile is about
  stats:{
    created:new Date().toUTCString(), //date profile was first created
    edited:new Date().toUTCString(), //date of last update to user profile
    views:0 //total views accumilated
  },
  type:'STRING' //whether user profile is about a specific 'sentience', or about an 'intelligence' that is comprised of multiple sentiences
};

///User Model
let user = {
  _id:'MONGO_GENERATED',
  group:'STRING', //bucket groups - either based on subscription (regular,premimum) or role-base access (public,private,etc)
  name:'STRING OF USERS NAME',
  password:'STRING', //either cleartext (and hope there are no breaches) or hashed upon creation (1st-party or 3rd-party hashing)
  role:'guest', //A role that has been assigned a user: ['guest','member','admin']
  stats:{
    created:new Date().toUTCString(), //the date of the user's creation
    verified: false //makes admins verify user creation, creating a user screening opportunity
  },
  type:'STRING', //['sentience','bot']
  use:'password', //decides whether to auth by 1) the name of the 'user' [single-user access] or 2) a 'password'. [multiple-user access]
  articles: [
    {name:'STRING',_id:'STRING'}
    {name:'STRING',_id:'STRING'}
    {name:'STRING',_id:'STRING'}
  ],
  lists:[
    {name:'STRING',_id:'STRING'}
    {name:'STRING',_id:'STRING'}
  ]
};