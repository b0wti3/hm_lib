function (context, args) {
  //sDynix Access Script
  let pK = 'kbHXYHFiR3fX709rZLSJ'
  if (!args) {
    return
  } else if (args.pK) {
    if (args.pK === pK) {
      if ('script' in args) {
        if (args.script === 'user_db') {
          return #fs.dynix.user_db()
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return
    }
  } else {
    return
  }
}