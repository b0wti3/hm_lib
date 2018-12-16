function (context, args) {
  const gdb = #fs.dynix.access({access:"gibson_db",auth_id:""})
  /*
  DEVELOPMENT NOTES FOR SCRIPT:

  This script was created to complete 3 of 3 stages to solve gibson.launch and scrape tier 4 locs automatically.

  NOTE: This script will be the MOST complicated. The notes will ABSOLUTELY NEED to be reviewed by several people before development will begin!!

  The following outlines the objectives step 3 needs to complete:
    1.
      For each cluster's indecies of coordnates, run them through an algorithim to "fit" them to a trajectory arc (parabola). Once fitted, find the coordnates of both sides of the parabola.
    2.
      (Note: It gets hairy from here on!) Once done finding the coordnates of each index of a cluster, match one of the coords of each arc to a launch site. Then, match the other coordnate to that launch site's maximum range list of cities, assigning each impact coord a city they impact close to.
    3.
      Compare all arc's impact coordnates to see which one impact's at the largest populated area. Take the selected arc, and convert the index into hexidecimal. Take that value and add it to the database document for launch codes.
    4.
      Once all launch codes have been found, set solved value of launch codes document to TRUE, and then set the timeout value to 4 hours (in seconds/milliseconds) after the date the solve value was found. Only after that timeout value is the same or older than current time will the script allow anyone to rerun the solve (unless the override value is set to true).
      
      
  */
}