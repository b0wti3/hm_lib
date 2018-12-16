function (context, args) {
  let page,authenticated,content,confirm
  let user = {
    name: context.caller,
    role: 'guest'
  }
  let userDB = #fs.meta.user_db_commands()
  let lib = #fs.scripts.lib()
  let logo = [
    '',
    '       `I\\@@@@@@@@@@@@@*`          `Id8888  8888888b.    888`',
    '    `I@@@@@@@@@@@@@@@@@@@@@`      `Id88888  888   Y88b   888`',
    '    `J@@@@@@@@@@@@@@@@@@@@@`     `Jd88P888  888    888   888`',
    '      `J,@@@@@@@@@@@@@@@,`      `Jd88P 888  888   d88P   888`',
    '    `J@@.              , @@`   `Jd88P  888  8888888P"    888`',
    '    `H@@@@@@@@@@@@@@@@@@@@@`  `Hd88P   888  888          888`',
    '     `H*@@@@@@@@@@@@@@@@@.`  `Hd8888888888  888     d8b  888`',
    '                         `Hd88P     888  888     Y8P  88888888`',
    '                         `1ATHENEAUM     PUBLIC       LIBRARY`',
  ]
  content = [
    '`1To begin, please choose one of the following:`',
    '  `1account` `Nlogin`',
    //'`12. Create Account -` `Nregister`:`V""`',
    '',
    '`1For more information, use` `Nhelp`:`V""`'
  ]
  function createPage (body='',title='',footer='',nav = '') {
    let pageArr = [
      logo,
      nav,
      title,
      body,
      footer
    ]
    return pageArr
  }

//LOGIC TREE START

  // Home Page (No Args)
  if (!args) {
    page = createPage (content,'','`Vhome`')
    return page
  } else if ('login' in args) {
    authenticated = userDB.member.authAccount(context.caller,args.login)
    if (authenticated.success === true) {
      user = authenticated.user
    } else {
      page = createPage(authenticated.msg,'','`Vhome>login`')
      return page
    }
  }
  if ('raw' in args) {
    if (context.caller === 'meta') {
      if (args.raw === 'f') {
        if ('q' in args && 'p' in args) {
          return userDB.raw.f(args.q,args.p).array()
        } else if ('q' in args) {
          return userDB.raw.f(args.q).array()
        }
      } else if (args.raw === 'u') {
        if ('q' in args && 'a' in args) {
          return userDB.raw.u(args.q,args.a)
        }
      } else if (args.raw === 'u1') {
        if ('q' in args && 'a' in args) {
          return userDB.raw.u1(args.q,args.a)
        }
      } else if (args.raw === 'us') {
        if ('q' in args && 'a' in args) {
          return userDB.raw.us(args.q,args.a)
        }
      } else if (args.raw === 'i') {
        if ('i' in args) {
          return userDB.raw.i(args.i)
        }
      } else if (args.raw === 'r') {
        if ('r' in args) {
          return userDB.raw.r(args.r)
        }
      }
      return "No command input found."
    } else {
      return '. . . you fail.'
    }
  }
  // Help
  if ('help' in args) {
    if (lib.is_str(args.help) && args.help.length === 0) {
      if (user.role === 'admin') {
        content = [
        '`JThe following commands are available to you:`',
        '  `1- View Account Details -` `Ncmd`:`V"view_self"`',
        '  `1- Edit Account -` `Ncmd`:`V"edit_self"`',
        '  `1- Delete Account -` `Ncmd`:`V"delete_self"`',
        '',
        '`JThe following admin commands are available to you:`',        
        '  `1* Find Accounts - ``Ncmd`:`V"find"`',
        '  `1* Retrieve an Account -` `Ncmd`:`V"get"`',
        '  `1* Create an Account -` `Ncmd`:`V"create"`',
        '  `1* Edit an Account -` `Ncmd`:`V"edit"`',
        '  `1* Delete an Account -` `Ncmd`:`V"delete"`',
        //'  `1* Reset an Account\'s Password -` `Ncmd`:`V"reset"`',
        '  `1* Verify an Account -` `Ncmd`:`V"verify"`',
        ''
      ]
        page = createPage(content,'Help','`Vhome>help`')
        return page
      } else if (user.role === 'member') {
        content = [
        '`1The commands below are available to you:`',
        '  `1- View Account Details -` `Ncmd`:`V"view_account"`',
        '  `1- Edit Account -` `Ncmd`:`V"edit_account"`',
        '  `1- Delete Account -` `Ncmd`:`V"delete_account"`',
        ''
      ]
        page = createPage(content,'Help','`Vhome>help`')
        return page
      } else  if (user.role === 'guest') {
        content = [
          '`1The following commands are available to you:`',
          '  `1- Create an account by using` `Ncmd`:`V"create_self"`',
          '  `1- Login into an account by using` `Nlogin`:`V""`',
          //'  `12. Request a password reset for an account by using reset:true,user:<string>.',
          ''
        ]
        page = createPage(content,'Help','`Vhome>help`')
        return page
      }
    }
  }
  // Commands
  if ('cmd' in args) {
    //Admin Commands
    if (user.role !== 'guest' && user.role !== 'member') {
      if (args.cmd === 'find') {
        content = userDB.admin.findUsers(args.query)
        page = createPage(content.msg,'','`Vhome>admin`')
        return page
      } else if (args.cmd === 'get') {
        content = userDB.admin.getUser(args.query)
        page = createPage(content.msg,'','`Vhome>admin`')
        return page
      } else if (args.cmd === 'create') {
        confirm = args.confirm || false
        content = userDB.admin.createUser(args.input,confirm)
        page = createPage(content.msg,'','`Vhome>admin`')
        return page
      } else if (args.cmd === 'edit') {
        confirm = args.confirm || false
        content = userDB.admin.editUser(args.query,args.input,confirm)
        page = createPage(content.msg,'','`Vhome>admin`')
        return page
      } else if (args.cmd === 'delete') {
        confirm = args.confirm || false
        content = userDB.admin.deleteUser(args.query,confirm)
        page = createPage(content.msg,'','`Vhome>admin`')
        return page
      } else if (args.cmd === 'verify') {
        confirm = args.confirm || false
        content = userDB.admin.verifyUser(args.query,confirm)
        page = createPage(content.msg,'','`Vhome>admin`')
        return page
      }
    }
    if (user.role !== 'guest') {
      if (args.cmd === 'view_self') {
        content = userDB.member.viewAccount(user._id)
        page = createPage(content.msg,'Account Details:','`Vhome>account`')
        return page
      } else if (args.cmd === 'edit_self') {
        confirm = args.confirm || false
        content = userDB.member.editAccount(user._id,args.input,confirm)
        page = pageCreate(content.msg,'','`Vhome>account`')
        return page
      } else if (args.cmd === 'delete_self') {
        confirm = args.confirm || false
        content = userDB.member.deleteAccount(user._id,confirm)
        page = createPage(content.msg,'','`Vhome>account`')
        return page
      }
    }
    if (args.cmd === 'create_self') {
      confirm = args.confirm || false
      content = userDB.guest.createAccount(context.caller,args.input,confirm)
      page = createPage(content.msg,'','`Vhome>create_account`')
      return page
    }
    page = createPage('Error - `Ncmd` could not be processed.','','`Vhome>'+user.role+'`')
    return page
  }

  // Logged In Page (Logged in, but no other options)
  if (user.role !== 'guest' && user.role !== 'member') {
    content = [
      '',
      'Welcome '+'`F'+user.role+'`'+' '+'`L'+user.name+'`'+'.',
      'Use `Nhelp`:`V""` to see available commands.',
      ''
    ]
    page = createPage(content,'','`Vhome`')
    return page
  } else if (user.role !== 'guest') {
    content = [
      '',
      'Welcome '+'`H'+user.role+'`'+' '+'`L'+user.name+'`'+'.',
      'Use `Nhelp`:`V""` to see available commands.',
      ''
    ]
    page = createPage(content,'','`Vhome`')
    return page
  // Home Page (Args, but not logged in)
  } else {
    page = createPage(content,'','`Vhome`')
    return page
  }
  // Further Features: Password Reset, Verification, etc.
}