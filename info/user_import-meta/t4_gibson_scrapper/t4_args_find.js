function (context, args) {
  const gdb = #fs.dynix.access({access:"gibson_db",auth_id:""})
  const dlib = #fs.dynix.access({access:"gibson_lib",auth_id:""})

  /*
  DEVELOPMENT NOTES FOR SCRIPT:

  This script was created to complete 1 of 3 stages to solve gibson.launch and scrape tier 4 locs automatically.

  The following outlines the objectives step 1 needs to complete:

    1. 
      The script checks the gibson solver database for status document. It will show the current launch codes from previous solve (or [none] if database document doesn't exist). It then checks the document, if present, for it's timeout value. If the value is the same or older than current timestamp date, it then prompts the user (if authorized) if they would lke to run the scraper in order to solve current gibson.
    2.
      If the user passes {start:true}, It starts by using a timer. It uses a db object to track the progress of each hypercluster (a-f) during all three steps, per cluster. Using several dictionary arrays, the script starts bruting each argument till get gets to the data bank.
    3.
      





  */
}