function (context, args) {
  const gdb = #fs.dynix.access({access:"gibson_db",auth_id:""})
  /*
  DEVELOPMENT NOTES FOR SCRIPT:

  This script was created to complete 2 of 3 stages to solve gibson.launch and scrape tier 4 locs automatically.

  The following outlines the objectives step 2 needs to complete:

    1.
      Using the arguments found in step 1, the script dynamically splits, decorrupts, and saves each alpha-numeric string in an array. 
    2.
      The script runs each string into it's cluster with correct args using info:"<string>". It then takes each string's output and saves them all to the database as seperate documents. NOTE: Only input into the database entries whose index key is valued less than 16 (0-15).
  
  
  
  
  
  
  */
}