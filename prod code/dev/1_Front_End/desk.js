function(context, args)
{
	//desk.js - Part of the 'Athenaeum Library' Project; By: _meta_
	//Purpose: Main public-facing library script. Used to: 
	//  * Provides access to top level library functions
	//  * Store and retrieve user-provided content
	//  * Organizes data into several catergories for ease-of-access


// START OF DEV

    // Runs args through sanitizer and recieves a edited args object
    let santizedArgs = #fs.athenaeum.sanitizer(args)
    
    // Inputs sanitizedArgs into core and recieves a page object
    let page = #fs.atheneaum.core(santizedArgs)
    
    // Tests whether the page object's results are valid and if it contains any errors
        // If any of the tests evaluate to false, or if any errors are found, output error code(s) and generic array.
        // Return out valid content array to user when all checks go through
    
    // Outdated Code (7.2.18) [SAVED FOR RESEARCH]
    /* if (page.content !== undefined && page.content !== null) {
        
        return page.content;
    } else {
        // Returns out 
        const error = [
            "",
            "There was and error. Please contact `ADynix Corp` with the following error text:",
            page.error || "UNKNOWN",
            ""
        ];
        return page.error;
    }
    */

    // END OF DEV

    const splash = #fs.athenaeum.lib_splash()
    return splash;
}
