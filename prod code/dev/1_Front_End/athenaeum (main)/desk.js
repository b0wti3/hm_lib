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



    // Required Libraries . . .
        // . . . are imported here!
        let lib = #fs.scripts.lib();
        //let Page = #fs.athenaeum.pageConstructer();
    

    // Core Functions . . .
        // . . . are written here!



    // Script's Brains . . .
        // . . . start here!
    let mainPage;

    if (!args) {
        mainPage = new Page()
    }

    let mainPage = new Page();


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
