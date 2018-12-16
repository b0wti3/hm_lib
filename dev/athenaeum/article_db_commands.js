function (context,args) {
  const userDB = #fs.pira.public({authKey:'supersecretkey',script:'user_db_libray'})
  const lib = #fs.scripts.lib()
  let obj = {
    admin:{},
    member:{},
    guest:{}
  }
  return obj
}