function (context,args) {
//TO-DO LIST:
// * Test for accurate db command pointing, as well as for edge cases on 'User' function
// * Improve/Edit Comments
// * Replace to-do list with version information

  return {
    f:(q,p)=>#db.f(q,p),
    u:(q,a)=>#db.u(q,a),
    u1:(q,a)=>#db.u1(q,a),
    us:(q,a)=>#db.us(q,a),
    i:i=>#db.i(i),
    r:r=>#db.r(r),
    User:function(i) {
      let obj = {
        _id:#db.ObjectId(),
        name: context.caller, // username that can be set by user, but defaults to context.caller
        password:'', //either cleartext (and hope there are no breaches) or hashed upon creation (1st-party or 3rd-party hashing)
        userType:'sentience', //'sentience','intelligence', or 'bot' - defaults to 'sentience'
        isBot:'false',
        isSystem:'false',
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
        obj.name = args.name
      }
      if ('password' in args) {
        //Password input authentication and rules
        //obj.password = args.password
        obj.userType = 'intelligence'
      }
      if ('type' in args) {
        if (args.type === 'bot') {
          obj.isBot = true
        }
      }
      //Returns User document out to caller
      return obj
    }
  }
}