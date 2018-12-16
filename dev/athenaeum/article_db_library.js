function (context,args) {
//TO-DO LIST:
// * Test for accurate db command pointing, as well as for edge cases on 'User' function
// * Improve/Edit Comments
// * Replace to-do list with version information
const lib = #fs.scripts.lib()
  return {
    f:(q,p)=>#db.f(q,p),
    u:(q,a)=>#db.u(q,a),
    u1:(q,a)=>#db.u1(q,a),
    us:(q,a)=>#db.us(q,a),
    i:i=>#db.i(i),
    r:r=>#db.r(r),
    Article(i){
      let obj = {
        _id:#db.ObjectId(),
        name: 'empty', // username that can be set by user, but defaults to context.caller
        schema: 'article',
        type:'dev',
        content: [
          {
            header:[],
            nav:[],
            name:[],
            body:[],
            footer:[]
          },
        ],
        access: {
          authenticate:false,
          group:false,
          role:false
        },
        stats:{
          author:'anonymous',
          created:new Date(),
          edit:new Date(),
          views:0
        },
        tags:[]
      }
      //Applies user information to User Document
      if ('name' in i) {
        obj.name = i.name
        for (let i=0; i < obj.content.length; i++) {
          obj.content[i].name.push('Article: ' + i.name)
        }
      }
      if ('type' in i) {
        //Password input authentication and rules
        //obj.password = args.password
        obj.type = i.type
      }
      if ('authenticate' in i) {
        if (i.authenticate === true) {
          obj.access.authenticate = true
        }
      }
//      if ('group' in i) {
//        if ()
//      }
      if ('tags' in i) {
        if (lib.is_str(i.tags)) {
          obj.tags.push(i.tags)
        } else if (lib.is_arr(i.tags)) {
          obj.tags = i.tags
        }
      }
      //Returns User document out to caller
      return obj
    }
  }
}