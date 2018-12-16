function (context,args) {
//TO-DO LIST:
// * Improve/Edit Comments
// * Replace to-do list with version information

  return {
    f:(q,p)=>#db.f(q,p),
    u:(q,a)=>#db.u(q,a),
    u1:(q,a)=>#db.u1(q,a),
    us:(q,a)=>#db.us(q,a),
    i:i=>#db.i(i),
    r:r=>#db.r(r),
    User(i){
      let obj = {
        model:'User',
        _id:#db.ObjectId(),
        name: context.caller, // username that can be set by user, but defaults to context.caller
        password:false, //either cleartext (and hope there are no breaches) or hashed upon creation (1st-party or 3rd-party hashing)
        userType:'sentience', //'sentience','intelligence', or 'bot' - defaults to 'sentience'
        isBot:'false',
        isSystem:'false',
        role:'member', //A role that has been assigned a user: ['member','admin']
        created:new Date().toUTCString(),
        verified:false,
        group:[], //bucket groups - either based on subscription (regular,premimum) or role-base access (public,private,etc)
        use:'username', //decides whether to auth by 1) the name of the 'user' [single-user access] or 2) a 'password'. [multiple-user access]
        articles: [],
        lists:[]
      }
      //Applies user information to User Document
      if ('name' in i) {
        obj.name = i.name
      }
      if ('password' in i) {
        //Password input authentication and rules
        //obj.password = args.password
        obj.userType = 'intelligence'
        obj.use = 'password'
        obj.password = i.password
      }
      if ('type' in i) {
        if (i.type === 'bot') {
          obj.isBot = true
        }
      }
      //Returns User document out to caller
      return obj
    }
  }
}