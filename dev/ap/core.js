function (context, args) {
  /** APL (Atheneaum Public Library)
    * Version: 0.1
    * Description:
    *   core.js is part of the suite of .js scripts that
    *   make up the apl service within hackmud. It handles
    *   the main logic, including arg handeling, page 
    *   creation, and db requests.
    *
    *   It is designed to work with the hackmud user 'ap' 
    *   locally, as well as 5 other users remotely: 
    *     'atheneaum', 'library', 'lib, 'pira', and 'dynix'.
    *
    *   Suite scripts that call this file include 'l' and 
    *   'library'.
    *
    *   Scripts that 'core' leverages include the 
    *   following:
    *     'atheneaum.access','library.access',  
    *     'dynix.access', 'pira.access', 'lib.access'
    *
    *   Other scripts called may be include other local 
    *   scripts, or hidden within the above script 
    *   wrappers.
    */

  /** Development Notes
    * Summary:
    *   This script has the following tasks:
    *     1.  Parses 'args' to determine user input
    *     2.  Processes input, executing required scripts
    *         according to the need (db calls, functions)
    *     3.  Creates a page to be returned out to user
    *     4.  Processes page object, and returns array out
    *         to the user
    */
  let config = #fs.ap.config()

  const lib #fs.scripts.lib()
  const plib = #fs.ap.defaults({o:'page'})
  // pass hash script
  const db = {
    user:#fs.dynix.access({script:'user_db',authId:'kbHXYHFiR3fX709rZLSJ'}),
    content:#fs.athenaeum.access({script:'content_db',authId:'2uJs9PuuLKb633j5RDbF'}),
    page:#fs.library.access({script:'page_db',authId:'R3YB0dE8IkzYJUTwoKWv'}),
    profile:#fs.pira.access({script:'profile_db',authId:'7U0xTq82LMihxbytetpU'}),
    backup:#fs.lib.access({script:'backup_db',authId:'NAr2KVvzRZ45nethy5ja'}),
    edit:#fs.ap.edit_db()
  }
  function Page (input, state = 0) {
    const defaults = #fs.ap.defaults({o:'build'})
    let o = {
      defaults:defaults.content,
      content:input.content,
      state:state
    }
//    if (input.stats) {
//      o.stats = input.stats
//    }
    o.processPage = function (type = 'content') {
      let keys, arr = [
        o.defaults.logo,
        o.defaults.line
      ]
      if (type === 'content') {
        keys = ['nav','body']
//      } else if (type === 'stats') {
//        keys = []
      } else {
        return false
      }
      
      for (let i = 0; i < keys.length(); i++) { //Rough Draft - will need to expand page handling (ALOT)
        if (i in o[type]) {
          arr.push = o[type][i]
          arr.push = o.defaults.line
        }
      }
      return arr
    }
    return o
  }
  function ErrorPage (error) {
    const defaults = #fs.ap.defaults({o:'error'})
    let o = {}
    // Takes script errors and returns out an error page based on error type
    // Uses boiler template information to setup the error page object
    // Takes error input object and produces the page.
    // Then outputs an array of strings that makes up the error page
  }
  const pageEditor = i => #fs.ap.edit(i)

  let page = {}, timer = {}, query, response, stackTrace = []
  timer.start = new Date()
  timer.current = new Date() - timer.start
  let user = {
    name: context.caller,
    role: 'guest'
  }
  // check if owner
//  if (context.caller === 'meta' || context.caller === 'pira') {
//    response = #fs.ap.private(args)
//    page = createPage(response)
//    return page.outputPage()
//  }
  // check whitelist
  // check configurations
  if (!config || config.closed === true) {
    page = new Page(plib.closed)
	return page.processPage()
  }

  // logic tree
  if (!args) { // Home page
    page = new Page(plib.home)
    return page.processPage()
  }
  if ('login' in args) {
    query = db.user.authAccount(context.caller,args.login)
    if (query.success === true) {
      user = query.user
    } else {
      page = createError(query)
      return page
    }
  } else {
	
  }
  if ('help' in args) { // Help page with information based on input
    if (lib.is_str(args.help) && args.help.length === 0) { // List basic information and how to further use help
      
    }
  }
  if ('option' in args) { // NOTE: editor breakout function is accessible here. Make sure to keep the editor as a seperate scriptor.
    if (args.option === 'editor') {
      // editor scriptor goes here.
    } else if () {
      
    }
  }
  if ('cmd' in args) { //admin commands
    
  }

  if (user.role !== 'guest' && user.role !== 'member') { // Home page with admin command information (help_bot information)
    page = createPage(false,'adminInfo')
    return page.outputPage()
  } else if (user.role !== 'guest') { // Home page with member command information (help_bot information)
    page = createPage(false,'memberInfo')
    return page.outputPage()
  } else { // Home page with guest command information / navigating through the service (help_bot information)
    page = createPage(false,'guestInfo')
    return page.outputPage()
  }
  // page creation

  // page processing

  // output to user
  
  // (optional by config) final logging

}