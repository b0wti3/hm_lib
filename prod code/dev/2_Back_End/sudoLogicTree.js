//Sudo Logic Tree
/// This file is to help map the page logic for the apl service
/// Below are representations of what pages could look like navigating apl
/// All page content is represented by array literals, with potential db content noted by objects
let logo = [
    '`JEMPTY LOGO`'
]

let closed = [
  [logo, ''],
  ['`Closed`',''],
  [
    '`JWelcome to the Atheneaum Public Library (APL)`',
    '`BThe Atheneaum Public Library is temporarly closed. Please come back later.`',
    ''
  ],
  ['`BFor questions, contact us either at` library.help_desk `Bor via discord.`','']
]
let home = [
  [logo,''],
  ['cmd: about|articles|news|profiles|lists',''],
  ['`JAtheneaum Public Library (APL)`',''],
  [
    'To begin, please select a `cmd`.',
    '',
    'latest:', // unsure what this section should display - whether latest articles, news, or service information / updates
    'db call for array of latest articles'
    '(use `get`:`"[article_name]"` to view an article)',
    ''
  ],
  ['`home`','']
]
let about = [
  [logo, '`JAtheneaum Public Library (APL)`',''],
  ['cmd:  about|articles|news|profiles|lists',''],
  ['`About Us`',''],
  [
    '',
    '    `BThe Atheneaum Public Library is designed to help both sentience and intelligence alike on the path to greater knowledge in the MUD. All are welcome to devour the knowledge contained within.`'
    '',
    '`B- For help using the APL interface, use `help`:`""`.',
    '`B- For questions, comments, or bug reporting, contact us at` library.help_desk`B, or via one of our admins in-game or on discord.`',
    ''
  ],
  ['home>`about`','']
]
let articles = [
  ['`JAtheneaum Public Library (APL)`',''],
  ['cmd:articles','cat: lore|fiction|learn|tutorials|manuals',''],
  ['`APL Articles`',''],
  [
    'Select a category, or use the `find` command.',
    '',
    'Latest Articles:',
    //DB Pull of latest article list with dates
    ''
  ],
  ['home>`articles`','']
]
let news = [
  ['`JAtheneaum Public Library (APL)`',''],
  ['cmd: about|articles|news|profiles|lists',''],
  ['`APL News`',''],
  [
    'BODY',
    ''
  ],
  ['home>`news`','']
]
let lists = [
  ['`JAtheneaum Public Library (APL)`',''],
  ['cmd: about|articles|news|profiles|lists',''],
  ['`APL Lists`',''],
  [
    'BODY',
    ''
  ],
  ['home>`lists`','']
]
let api = [
  ['`JAtheneaum Public Library (APL)`',''],
  ['`APL API`',''],
  [
    'BODY',
    ''
  ],
  ['home>`api`','']
]
let profiles = [
  
]
let help = [
  
]
let login = [
  
]
let register = [
  
]





