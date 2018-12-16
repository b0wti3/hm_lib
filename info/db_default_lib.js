function (context, args) {
  // NOTE: Make sure to add security functions to this script to prevent exploitation by other users.
  // Library Required Setup
  return {
    f:(q,p)=>#db.f(q,p),
    u:(q,a)=>#db.u(q,a),
    u1:(q,a)=>#db.u1(q,a),
    us:(q,a)=>#db.us(q,a),
    i:i=>#db.i(i),
    r:r=>#db.r(r)
  }
} 