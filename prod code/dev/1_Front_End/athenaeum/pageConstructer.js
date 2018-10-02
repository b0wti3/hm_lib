function (context, args) {
    
    // pageConstructer
    let mObj = { };
    
    // page 'Class' Creation
    mObj.frame = {};
    mObj.splash = {};
    mObj.nav = {};
    mObj.header = {};
    mObj.body = {};
    // Within each of these 'classes', information is stored as a page is created
    // The following restrictions are applied to these classes:
        // the frame class can only contain the page frame of one page TYPE at a time
        // the splash class only can contain an array containing only ONE service splash image
        // the nav class can only contain up to 3 different navigation options (5 if a db / article page)
        // the header class can contain a main headline and sub headline, but only the main headline is required
        // the body class can contain up to 3 'secs' or sections of data, but no more than 2000 characters no matter what

    // Functions are tied to a page when it is outputed. They are to be used after a page is 'built' and ready to be created
    // A page is created by invoking the '[page_name_here].create'. It will be a return and must be saved to another variable before it can be outputted to a user
    // a created page will be an array built with the information stored within the page object, sorted automatically.
    // Thus, a page can be customized according to whatever framework a user implements.
    // THIS CONCEPT IS UNDER CONSTRUCTION. SOME FEATURES MAY BE CHANGED / REMOVED DEPENDING ON USEABILITY / PRACTACALITY.


    obj, pageType, decider
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