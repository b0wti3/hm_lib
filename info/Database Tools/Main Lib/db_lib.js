function (context, args) {
  //db_lib.js - Part of the 'Athenaeum Library' Project; By: meta
  //Purpose: Main db function library for database access and manipulation. 
  //  * Provides a function library that gives basic to advanced db access
  //  * Quickly builds a function object for use by user-specific scripts
  //  * Organizes data into several catergories for ease-of-access
  // Function Creation
  let raw = {
    f:(q,p)=>#db.f(q,p),
    u:(q,a)=>#db.u(q,a),
    u1:(q,a)=>#db.u1(q,a),
    us:(q,a)=>#db.us(q,a),
    i:i=>#db.i(i),
    r:r=>#db.r(r)
    //does the #db object have the drop command?
    //does a WriteResult object return with each hackmud db function?
    //does the #db.i command support bulkwriting, and will return a BulkWriteResult object?
    
  }
  const db = raw
  /*
    findOne:(db,q,p)=> {
      args.db.f(q,p).first()
      //db example: #fs.meta.db(key:"value")
    }
    */
  let admin = {
    //Direct Manipulation Functions
    findOne:(q,p)=>db.f(q,p).first(),
    findMany:(q,p)=>db.f(q,p).array(),
    findCount:(q,p)=>db.f(q,p).count(),
    findForEach:(q,p,fn)=>db.f(q,p).each(fn),
    findAndSort:(q,p,o)=>db.f(q,p).sort(o),
    getProp:()=>{},
    createProp:()=>{},
    editProp:()=>{},
    removeProp:()=>{},
    createOne:()=>{},
    updateOne:(q,a)=>db.u1(q,a),
    updateMany:(q,a)=>db.u(q,a),
    moveOne:()=>{},
    removeMatch:(r)=>db.r(r),
    removeAll:()=>db.r({}),
    backupDB:()=>{},
    restoreDB:()=>{},
    resetDB:()=>{},
    setAccess:()=>{},
    getAccess:()=>{},
    //User Manipulation - dictate db interface for user database
    createUser:()=>{},
    findUsers:()=>{},
    getUser:()=>{},
    editUser:()=>{},
    editUsers:()=>{},
    deleteUser:()=>{},
    deleteUsers:()=>{},
    resetPassword:()=>{},
    verifyUser:()=>{},
    //Article Manipulation
    findArticles:()=>{},
    getArticle:()=>{},
    createArticle:()=>{},
    editArticle:()=>{},
    deleteArticle:()=>{},
    deleteArticles:()=>{},
    //List Manipulation
    findLists:()=>{},
    getList:()=>{},
    createList:()=>{},
    editList:()=>{},
    deleteList:()=>{},
    deleteLists:()=>{},
    //Profile Manipulation
    findProfiles:()=>{},
    getProfile:()=>{},
    createProfile:()=>{},
    editProfile:()=>{},
    deleteProfiles:()=>{}
  }
  let advanced = {
    
  }
  let basic = {
    
  }
  const dbObj = {
    0:raw, // superadmin/owner
    1:admin, // admins
    2:'advanced', // superusers
    3:'basic' // member
  }
  // Variable Init
  let whitelist = ['meta']
  // Interface Logic
  if (!args) {
    return false
  } else if ("access") {
    if (args.access === 0) {
      for (let i; i<whitelist.length; i++) {
        if (context.caller === whitelist[i]) {
          return dbObj.0
        }
      }
      return false
    } else if (args.access === 1) {
      for (let i; i<whitelist.length; i++) {
        if (context.caller === whitelist[i]) {
          return dbObj.1
        }
      }
      return false
    } else if (args.access === 2) {
      for (let i; i<whitelist.length; i++) {
        if (context.caller === whitelist[i]) {
          return dbObj.2
        }
      }
      return false
    } else if (args.access === 3) {
      for (let i; i<whitelist.length; i++) {
        if (context.caller === whitelist[i]) {
          return dbObj.3
        }
      }
      return false
    }
  }
}