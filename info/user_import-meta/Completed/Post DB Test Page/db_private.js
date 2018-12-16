function(context, args) {
  // Page Setup
  let page, query, post = {}, lastPost
  var logo = [
    '       `I\\@@@@@@@@@@@@@*`          `Id8888  8888888b.    888`',
    '    `I@@@@@@@@@@@@@@@@@@@@@`      `Id88888  888   Y88b   888`',
    '    `J@@@@@@@@@@@@@@@@@@@@@`     `Jd88P888  888    888   888`',
    '      `J,@@@@@@@@@@@@@@@,`      `Jd88P 888  888   d88P   888`',
    '    `J@@.              , @@`   `Jd88P  888  8888888P"    888`',
    '    `H@@@@@@@@@@@@@@@@@@@@@`  `Hd88P   888  888          888`',
    '     `H*@@@@@@@@@@@@@@@@@.`  `Hd8888888888  888     d8b  888`',
    '                         `Hd88P     888  888     Y8P  88888888`',
    '                         `1ATHENEAUM     PUBLIC       LIBRARY`',
    ''
    /*'',
    '       `H\\@@@@@@@@@@@@@*`',
    '    `H@@@@@@@@@@@@@@@@@@@@@`',
    '    `H@@@@@@@@@@@@@@@@@@@@@`',
    '      `H,@@@@@@@@@@@@@@@,`',
    '    `J@@.              , @@`',
    '    `J@@@@@@@@@@@@@@@@@@@@@`',
    '     `J*@@@@@@@@@@@@@@@@@.`',
    '',
    '`JAtheneaum Public Library (APL)`',
    ''*/
  ]
  // Logic Tree
  if (!args) {
    query = #db.f({key:'lastPost'}).first()
    if (query) {
      lastPost = query.message
    } else {
      lastPost = '[none]'
    }
  } else if ("post" in args) {
    if (!("color" in args)) {
      post = {
        key:'lastPost',
        message:args.post,
        author:context.caller
      }
      query = #db.f({key:'lastPost'}).first()
      if(query) {
        #db.u1({_id:query._id},{$set:post})
      } else {
        post._id = #db.ObjectId()
        #db.i(post)
      }
      return {ok:true}
    } else if ("color" in args) {
      let catColors = [{name:'red',color:'`D'},{name:'blue',color:'`N'},{name:'green',color:'`L'}]
      for (let i = 0; i < catColors.length; i++) {
        if (args.color === catColors[i].name) {
          post = {
            key:'lastPost',
            author:context.caller,
            cat:args.color,
            message:catColors[i].color + args.post + '`'
          }
          query = #db.f({key:'lastPost'}).first()
          if(query) {
            #db.u1({_id:query._id},{$set:post})
          } else {
            post._id = #db.ObjectId(),
            #db.i(post)
          }
          return {ok:true}
        }
      }
      throw new Error('Invalid message color.')
    }
  } else if ("clear" in args) {
      if (args.clear === 'all') {
        #db.r({})
        return {ok:true}
      }
      throw new Error('Invalid command.')
  } else if ("get" in args) {
    if (context.caller === 'meta' && args.get === 'lastPost') {
      query = #db.f({key:'lastPost'},{_id:0}).first()
      return query
    }
    throw new Error('Invalid command.')
    }
  page = [
    [logo],
    ['`Ncmd`:`V"post"`','`Ncat`: `Dred`|`Lgreen`|`Nblue`'],
    ['`JPosts`',''],
    [
      '`JLast Post:`',
      [lastPost], // latest 3 articles published
      '',
      'Please leave a post with `Npost`:`V"[message]"`. If you would like it to be a special color, please include `Ncat`:`V"[color]"`.',
      '',
      'To clear the `JLast Post` section, run `Nclear`:`V"all"`',
      '',
      '`DCurrently Unsupported`',
      'To search for a post, please choose an above category, or choose a search method from below:',
      '1. title search    - `Nfind`:`V"name"`',
      '2. id search       - `Nget`:`V"id"`',
      '3. category search - `Ncat`:`V"color"`',
      '4. author search   - `Nuser`:`V"name"`',
      ''
    ],
    ['home>`Vposts`','']
  ]
//  return page
  return page
}