function (context, args) {
  //Library Access Script
  let pK = 'R3YB0dE8IkzYJUTwoKWv'
  if (!args) {
    return
  } else if (args.pK) {
    if (args.pK === pK) {
      if ('script' in args) {
        if (args.script === 'page_db') {
          return #fs.library.page_db()
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