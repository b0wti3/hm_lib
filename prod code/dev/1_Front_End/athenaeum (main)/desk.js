function(context, args)
{
	//desk.js - Part of the 'Library' Project; By: _meta_
	// Main Access Script to the Athenaeum Library System

    // DEV OUTLINE: What will this script do?
	//  * Provides all users a read-only interface into the library's contents.
    //  * Has a 'power-switch' built in to allow owner / admin to turn off the library during maintaince.
    //  * Provides two output options: a "user-friendly" one (for new users), as well as a "bare-bones" view (experienced users).
    //  * Does final text processing to prepare for viewing.
    //  * Decides to send all library requests by the following categories:
    //      1) Page Requests
        //      A) Read / Search
        //      B) Comment
        //      C) Write / Edit
        //      D) Delete / Create
    //      2) Account Requests
    //      3) Admin Requests
    //      4) Store / Payment Requests
    //      5) Help Requests
    //      7) 
    // DEV OUTLINE: What are some of the features built into this script?
    //  * Contains a base 'page' to display content in. (In case backend scripts have to come down / when library is 'shutdown')



    // Main Variable / Scriptor Setup
    let lib = #fs.scripts.lib()

    // Base Object / Base Page Array Setup
    let baseArr = [];
    
    
    let baseObj = {
        logObj : [],
        pageObj : {}
    };

    // Core Functions



    function pageBuilder (obj, pageType, decider) {
        let defaultPages = (type, str) => #fs.athenaeum.default_pages(type, str)
        
        
        if (decider === "slim") {
            let defaultObj = defaultPages(pageType,"slim");
        } else {
            let defaultObj = defaultPages(pageType,"full");
        }
        
        let newObj = {};
        
        for (let key in obj.pageObj) {
            
        }
        
        // This function is passed a object that has to remain a consistant standard and something that can easily be processed by multiple scripts. Should a function constructor be used? Or will simply defining one object be enough since the script only processes one page at a time?
        
        // obj: the obj that contains page information to be passed out to user.
        // decider: A string set to either "full" or "slim" - decides whether to output a full page, or one that has only the bare essentials (decided by user).
        
        // takes object and picks correct default page frame to use from 'default_pages' script.
        // formats default page based on user info, access level, and request(s).
        // creates a string with final page compilation (and optional debug dump if requested by an admin / the owner? NYI / Thought Of)
        // returns out completed string and debug dump.
        
    }
    
    // Code that filters out calls that could contain key values with scriptors / anything else unwanted:
    /*
    for (let key in args) {
        if ( lib.is_obj(key) || !lib.is_str(key) ) {
            // Reject Script Request and return out page message.
        }
    }

    baseObj.parameters = args;

    
    */
    const splash = #fs.athenaeum.lib_splash()
    return splash;
    
    
}
