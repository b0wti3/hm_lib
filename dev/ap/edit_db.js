function (context, args) {
  const config = {
    owner:"meta",
    trusted:["meta","ap","pira"],
    checkWhitelist: (username, role) => #fs.dynix.whitelist(username,role)
  }
  const raw = {
    f:(q,p)=>#db.f(q,p),
    u:(q,a)=>#db.u(q,a),
    u1:(q,a)=>#db.u1(q,a),
    us:(q,a)=>#db.us(q,a),
    i:i=>#db.i(i),
    r:r=>#db.r(r)
  }
  const common = {
    
  }
  const schema = {
    user: {
      model:'User',
      _id:[true,'ObjectId'],
      created:[false,'Date'],
      name:[true,'String'],
      password:[true,'String'],
      userType:[false,'String'],
      role:[false,'String'],
      group:[false,'Array'],
      articles:[false,'Array']
    }
  }
  const commands = {
    user: {
      createUser,
      findUsers,
      getUser,
      editUser,
      deleteUser,
      editAccount,
      deleteAccount,
      viewAccount,
      authAccount,
      createAccount
    }
  }

  let obj
  if (args) {
    if (args.model === "user") {
      obj = {
        commands:commands.user,
        schema:schema.user
      }
    } else {
      return false
    }
  } else {
    return false
  }
  
}