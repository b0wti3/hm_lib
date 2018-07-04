function (context, args) {
    //desk.js - Part of the 'Athenaeum Library' Project; By: meta
	//Purpose: Main backend script that runs the Atheneaum Library service. 
	//  * Processes user requests and returns processed data based on requests
	//  * Store and retrieve user-provided content
	//  * Organizes data into several catergories for ease-of-access

    // Settings Import
    const config = #fs.athenaeum.cconfig() || {};
    const qlOptions = #fs.athenaeum.qloptions() || {};

    // Function Setup
    const coreLib = config.coreLib(); 
    const sanitize = coreLib.sanitize;
    const format = coreLib.format;
    const Page = coreLib.Page;

    // Variable and Settings Sync
    let sargs, mainPage;

    // Sanitizes the args input if not null or undefined
    if (args !== undefined && args !== null) {
        sargs = sanitize(args);
    } else {
        sargs = args;
    }

    // Fetches page data according to args
    
    /*
    
    if (sargs === undefined) {
        mainPage = format(Page(qlOptions.welcome));
        return mainPage;
    } else if (sargs === null) {
        mainPage = format(Page(qlOptions.home));
        return mainPage;
    } else {
    
    
        // parse the json string of args (or an empty object if args does not exist) vv
            // args = JSON.parse(JSON.stringify(args || {}))
            
        // for every key in args, check if the key is in the qlobject list.
            // if it is, add the key:value pair to a new array.
        // Once, all matches are found, compare the combination og keys to see if there is a combination within the qlobject list.
            // If there is, grab the data for that pair via the QL.
            // If there is not, grab the data for the null (aka "home") page.
        
        // Once the data has been grabbed
        
        
        // For each key:value pair in the args object, see if it exists in the qlOptions list.
            // If it doesnt, move on to next arg.
            // If it does exist, check the values.
                // Add the matching ql to the value to the page stack.
        
    }*/

}