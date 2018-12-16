function (context, args) {
  let coordData, stackTrace = [], timer = {}, msg, response
  //Database Library (Designed for remote access if needed)
  const gdb = #fs.dynix.access({access:"gibson_db",auth_id:""})
  //Step 1 Script
  const findArgs = (i) => #fs.dynix.t4_args_find(i)
  //Step 2 Script
  const pullData = (i) => #fs.dynix.t4_data_pull(i)
  //Step 3 Script
  const CalcCoords = (i) => #fs.dynix.t4_cord_calc(i)

  timer.start = new Date()
  timer.current = new Date() - timer.start
  msg = [
    '----------------------------------------',
    '|| GIBSON SCRAPER (v1.0)              ||',
    '----------------------------------------',
    'START OF STACKTRACE. CHECKING INPUT. . .'
  ]
  stackTrace.push(...msg)
  
  if (!args) {
    stackTrace.push('OBTAINING LAUNCH CODES. . .')
    coordData = gdb.f({model:'LaunchCode'},{progress:0})
    if (coordData && coordData.isSolved === true) {
      msg = [
        'LAUNCH CODES FOUND:',
        '',
        coordData,
        'LAST SOLVE: ' + coordData.override
        '',
        'TO RUN SCRAPER, USE {`Nrun`:`Vtrue`}'
        '[END OF LINE.]',
        ''
      ]
      stackTrace.push(...msg)
      
    } else {
      msg = [
        'NO LAUNCH CODES FOUND.',
        '',
        'TO RUN SCRAPER, USE {`Nrun`:`Vtrue`}'
        '[END OF LINE.]',
        ''
      ]
    }
  }
  if ('run' in args && args.run === true) {
    stackTrace.push('STARTING UP SCRAPER. . .')
    timer.current = new Date() - timer.start
    // Scraper Brain Code
    response = findArgs({
      stackTrace,
      timer,
      launchCodeId:coordData._id
    }) // expected response: obj with sT,timer,msg,statusCode
    // Check timer & statusCode. Use info to decide what to do next.
  }
}