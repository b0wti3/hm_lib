function (context,args) {
  //Create a default User Model Document
  let User = {
    _id:#db.ObjectId(),
    name: context.caller, // username that can be set by user, but defaults to context.caller
    password:'', //either cleartext (and hope there are no breaches) or hashed upon creation (1st-party or 3rd-party hashing)
    userType:'sentience', //'sentience','intelligence', or 'bot' - defaults to 'sentience'
    role:'member', //A role that has been assigned a user: ['member','admin']
    created:new Date().toUTCString(),
    verified:false,
    group:[], //bucket groups - either based on subscription (regular,premimum) or role-base access (public,private,etc)
    use:'user', //decides whether to auth by 1) the name of the 'user' [single-user access] or 2) a 'password'. [multiple-user access]
    articles: [],
    lists:[]
  }
  //Applies user information to User Document
  if ('name' in args) {
    User.name = args.name
  }
  if ('password' in args) {
    //Password input authentication
    //User.password = args.password
    User.userType = 'intelligence'
  }
  if ('type' in args) {
    if (args.type === 'bot') {
      User.userType = 'bot'
    }
  }
  //Returns User document out to caller
  return User
}