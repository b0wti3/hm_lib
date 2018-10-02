//Contains a list of all functions connected with APL Models and DB Manipulation

//Raw Database Functions
{
  f:(q,p)=>#db.f(q,p),
  u:(q,a)=>#db.u(q,a),
  u1:(q,a)=>#db.u1(q,a),
  us:(q,a)=>#db.us(q,a),
  i:(i)=>#db.i(i),
  r:(r)=>#db.r(r)
  //does the #db object have the drop command?
  //does a WriteResult object return with each hackmud db function?
  //does the #db.i command support bulkwriting, and will return a BulkWriteResult object?
}

//User Model Object
{ 
  _id:#db.ObjectId(),
  group:'STRING', //bucket groups - either based on subscription (regular,premimum) or role-base access (public,private,etc)
  name:'STRING', // username that can be set by user, but defaults to context.caller
  password:'STRING', //either cleartext (and hope there are no breaches) or hashed upon creation (1st-party or 3rd-party hashing)
  role:'guest', //A role that has been assigned a user: ['guest','member','admin']
  stats:{
    created:new Date().toUTCString(), //the date of the user's creation
    verified: false //makes admins verify user creation, creating a user screening opportunity
  },
  type:'STRING', //'sentience','intelligence', or 'bot' - defaults to 'sentience'
  use:'user', //decides whether to auth by 1) the name of the 'user' [single-user access] or 2) a 'password'. [multiple-user access]
  articles: [],
  lists:[]
}

//User Model Functions
///Basic Access
function createUser() {}
function findUsers() {}
///Advanced Access
function editUser() {} //limited to own user
function deleteUser() {} //limited to own user
///Admin Access
function getUser() {}
function editUsers() {}
function deleteUsers() {}
function setAccess() {}
function getAccess() {}
function resetPassword() {}
function verifyUser() {}
function backupDB() {}
function restoreDB() {}
function resetDB() {}

//Article Model Object
{
  _id:#db.ObjectId(),
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
}

//Article Model Functions
///Basic Access
function findArticles() {}
function getArticle() {}
function getStats() {}
///Advanced Access
function createArticle() {}
function editArticle() {}
function deleteArticle() {}
function addTags() {}
function editTags () {}
function deleteTags() {}
///Admin Access
function deleteArticles() {}
function setAccess() {}
function getAccess() {}
function backupDB() {}
function restoreDB() {}
function resetDB() {}

{
  _id:#db.ObjectId(),
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
}

//List Model Functions
///Basic Access
function findLists() {}
function getList() {}
function getStats() {}
///Advanced Access
function createList() {}
function editList() {}
function deleteList() {}
function addTags() {}
function editTags () {}
function deleteTags() {}
///Admin Access
function deleteLists() {}
function setAccess() {}
function getAccess() {}
function backupDB() {}
function restoreDB() {}
function resetDB() {}

//Profile Model Object
{
  _id:#db.ObjectId(),
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
}

//Profile Model Functions
///Basic Access
function findProfiles() {}
function getProfile() {}
function getStats() {}
///Advanced Access
function createProfile() {}
function editProfile() {}
function addTags() {}
function editTags () {}
function deleteTags() {}
///Admin Access
function deleteProfiles() {}
function setAccess() {}
function backupDB() {}
function restoreDB() {}
function resetDB() {}
  
//General Functions
///Basic Access
function find() {}
function get() {}
///Advanced Access
function create() {}
function edit() {}
function add() {}
function remove() {} // limited
///Admin Access
function verify() {}
function process() {}
function set() {}
function resetDB() {}
function restoreDB() {}
function backupDB() {}


/////////////////////////////////////////////////
/*
//admin
function authenticateUser() {}
function backupDB() {}
function deleteUser() {}
function editUser() {}
function getStats() {}
function getAccess() {}
function process() {}
function remove() {}
function resetPassword() {}
function restoreDB() {}
function setAccess() {}
function verifyUser() {}

//advanced
function addTags() {}
function create() {}
function edit() {}
function editTags() {}
function deleteTags() {}

//basic
function createUser() {}
function find() {}
function get() {}
*/
