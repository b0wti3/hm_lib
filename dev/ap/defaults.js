function (context, args) {
  let obj = {
    build:{
      content:{
        line:'=====================================================================',
        wall:'|',
        logo: [
          '',
          '=====================================================================',
          '|      `I\\@@@@@@@@@@@@@*          d8888  8888888b.    888`             |',
          '|   `I@@@@@@@@@@@@@@@@@@@@@      d88888  888   Y88b   888`             |',
          '|   `J@@@@@@@@@@@@@@@@@@@@@     d88P888  888    888   888`             |',
          '|      `J@@@@@@@@@@@@@@@       d88P 888  888   d88P   888`             |',
          '|    `J@@.              @@    d88P  888  8888888P"    888`             |',
          '|   `H@@@@@@@@@@@@@@@@@@@@@  d88P   888  888          888`             |',
          '|    `H*@@@@@@@@@@@@@@@@@.  d8888888888  888     d8b  888`             |',
          '|                        `Hd88P     888  888     Y8P  88888888`        |',
          '|                        `1ATHENAEUM     PUBLIC       LIBRARY`         |'
        ],
        corrupted_chars:''
      }
    },
	page:{
	  closed:{
		nav:'`[insert_stupid_http_error_code_here_faythe]`',
		body:'`CSERVICE CLOSED.'
	  },
	  home:{
      nav:'`Cap``A.``2l``C/``Vhome`',
      body: [
        '`AWelcome to` `IAPL``A. To begin, select an` `Noption` `Abelow:`',
        '   `A1.` `Vread_content`',
        '   `A2.` `Vsee_news`',
        '   `A3.` `Vget_profiles`',
        '',
        '`CQuestions about us? Go` `Nview` `Vabout_us `Cto get more information.`',
        '`CHave an account? Please` `Nlogin` `Cto begin.`'
      ]
	  },
	  about:{
		nav:'`Cap``A.``2l``C/``Vabout_us`',
		body: [
		  '`AThe Atheneaum Public Library is designed to help both sentience and intelligence alike on the path to greater knowledge in the MUD. All are welcome to devour the knowledge contained within.`',
		  '',
		  '`BFor help using the APL interface, use `Nhelp`:`V""`.',
		  '`BFor questions, comments, or bug reporting, contact us at `Clibrary``A.``2help_desk``B, or via one of our admins in-game or on discord.`'
		]
	  }
    },
    error:{
      
    }
  }
  if (!args) {
    return ''
  } else if ('o' in args) {
    if (args.o === 'build') {
      return obj.page
    } else if (args.o === 'error') {
      return obj.error
	} else if (args.o === 'page') {
	  
	} else {
      return ''
    }
  } else {
    return ''
  }
}