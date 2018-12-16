function (context, args) {
  //Athenaeum Access Script
  let pK = '2uJs9PuuLKb633j5RDbF'
  if (!args) {
    return
  } else if (args.pK) {
    if (args.pK === pK) {
      if ('script' in args) {
        if (args.script === 'content_db') {
          return #fs.athenaeum.content_db()
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