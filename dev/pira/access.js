function (context, args) {
  //Pira Access Script
  let pK = '7U0xTq82LMihxbytetpU'
  if (!args) {
    return
  } else if (args.pK) {
    if (args.pK === pK) {
      if ('script' in args) {
        if (args.script === 'profile_db') {
          return #fs.pira.profile_db()
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