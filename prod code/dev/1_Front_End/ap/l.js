function(context, args)
{
  //l.js - Part of the 'Library' Project; By: meta
  //Version: Alpha 0.1
  // Public Redirect Script (Redirects to athenaeum.library)
  let arg = {}
  if (!args) {
	arg.size = "slim"
  } else if ("size" in args) {
	if (args.size !== "slim") {
	  arg = args
	  arg.size = "slim"
	} else {
	  arg = args
	}
  }
  const page = #fs.athenaeum.desk(arg)
  return page
//BUGS NOTICED:
// also probably worth mentioning neither logo appears in desk if you give it {}
// or just give it args in general without size:"slim" being one of them
}

