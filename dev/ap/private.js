function (context, args) {
  /** APL (Atheneaum Public Library)
    * Version: 0.1
    * Description:
    *   'private.js' is part of the suite of .js scripts that
    *   make up the apl service within hackmud. 
    *
    *   'private.js' handles the private commands that have
    *   assigned to specific users that have been hardcoded in
    *   core.js. This includes full-db access / manipulation,
    *   user troubleshooting, service event activation, as
    *   well as other situations.
    *
    *   It is designed to work with the hackmud user 'ap' 
    *   locally, as well as 5 other users remotely: 
    *   'atheneaum', 'library', 'lib, 'pira', and 'dynix'.
    *
    *   The Suite script that calls this file is 'core.js'.
    *
    *   Scripts that 'private.js' leverages include the 
    *   following:
    *     'atheneaum.access','library.access',  
    *     'dynix.access', 'pira.access', 'lib.access'
    *
    *   Other scripts called may be include scripts
    *   hidden within the above script wrappers.
    */

  /** Development Notes
    * Summary:
    *   This script has the following tasks:
    *     1.  Parses 'args' to determine hardcoded user
    *         input.
    *     2.  Processes input, executing required scripts
    *         according to the need. (db calls, functions)
    *     3.  Creates a page to be returned out to user.
    *     4.  Processes page object, and returns array out
    *         to the user.
    */
  
}