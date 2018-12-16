function (c, a) {
  let obj = {
    f:(q,p)=>#db.f(q,p),
    u:(q,a)=>#db.u(q,a),
    u1:(q,a)=>#db.u1(q,a),
    us:(q,a)=>#db.us(q,a),
    i:i=>#db.i(i),
    r:r=>#db.r(r),
    ClusterArgument (i, id = false) {
      let o_1 = {
        model:'ClusterArg',
        _id:#db.ObjectId(),
        updated:new Date(),
        updated_by:c.caller,
        cluster:i.cluster,
        args: i.args
      }
      return o_1
    },
    CoordData (i,id = false) {
      let o_2 = {
        model:'CoordData',
        _id:id || #db.ObjectId(),
        updated:new Date(),
        updated_by:c.caller,
        cluster:i.cluster,
        index:i.index,
        coords:i.coords
      }
      return o_2
    },
    ImpactCoord (i, id = false) {
      let o_3 = {
        model:'ImpactCoord',
        _id:id || #db.ObjectId(),
        updated:new Date(),
        updated_by:c.caller,
        cluster:i.cluster,
        index:i.index,
        coords:i.coords
      }
      return o_3
    }
    City (i) {
      let o_4 = {
        model:'City',
        _id:#db.ObjectId(),
        created:new Date().toUTCString(),
        name:i.name,
        pop:i.pop,
        coords:i.coords
      }
      return o_4
    },
    LaunchCode (i, id = false) {
      let o_5 = {
        model:'LaunchCode',
        _id:id || #db.ObjectId(),
        is_solved:false,
        override:false,
        timeout:new Date(),
        progress:{
          a:{
            step_1:false,
            step_2:false,
            step_3:false
          },
          b:{
            step_1:false,
            step_2:false,
            step_3:false
          },
          c:{
            step_1:false,
            step_2:false,
            step_3:false
          },
          d:{
            step_1:false,
            step_2:false,
            step_3:false
          },
          e:{
            step_1:false,
            step_2:false,
            step_3:false
          },
          f:{
            step_1:false,
            step_2:false,
            step_3:false
          }
        }
        
      }
      if (i.codes) {
        o_5.codes = i.codes
      } else {
        o_5.codes = []
      }
      return o_5
    }
  }
  return obj
}