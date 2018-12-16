function (context, args) {
  //Lib Access Script
  let pK = 'NAr2KVvzRZ45nethy5ja'
  if (!args) {
    return
  } else if (args.pK) {
    if (args.pK === pK) {
      if ('script' in args) {
        if (args.script === 'backup_db') {
          return #fs.lib.backup_db()
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