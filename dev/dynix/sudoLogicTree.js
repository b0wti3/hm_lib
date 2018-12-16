//Sudo Logic Tree
/// This file is to help map the page logic for the apl service
/// Below are representations of what pages could look like navigating apl
/// All page content is represented by array literals, with potential db content noted by objects
let logo = [
    '`JEMPTY LOGO`'
]

let closed = [
  [logo],
  ['`CLOSED`',''],
  [
    '`JWelcome to the Atheneaum Public Library (APL)`',
    '`BThe Atheneaum Public Library is temporarly closed. Please come back later.`',
    ''
  ],
  ['`BFor questions, contact us either at` library.help_desk `Bor via discord.`','']
]
let home = [
  [logo],
  ['`cmd`: about|articles|news|profiles|lists'],
  ['`JHome Page`',''],
  [
    'To begin, please select a `cmd`.',
    ''
  ],
  ['`home`','']
]
let about = [
  [logo],
  ['`cmd`:`"about"`'],
  ['`JAbout Us`',''],
  [
    '',
    '`BThe Atheneaum Public Library is designed to help both sentience and intelligence alike on the path to greater knowledge in the MUD. All are welcome to devour the knowledge contained within.`',
    '',
    '`B- For help using the APL interface, use `help`:`""`.',
    '`B- For questions, comments, or bug reporting, contact us at` library.help_desk`B, or via one of our admins in-game or on discord.`',
    ''
  ],
  ['home>`about`','']
]
let articles = [
  [logo],
  ['`cmd`:`"articles"`','`cat`: lore|fiction|learn|tutorials|manuals'],
  ['`JArticles`',''],
  [
    'Latest Articles:',
    'ARRAY', // latest 5 articles published
    '',
    'To find an article, please '/*+'choose a category, or '*/+'choose a search method from below:',
    '1. title search    - `find`:`"name"`',
    '2. id search       - `get`:`"id"`',
    '3. category search - `type`:`"category"`',
    '4. subject search  - `tag`:`"subject"`',
    '5. author search   - `user`:`"name"`',
    '6. top articles    - `top`:`""`',
    ''
  ],
  ['home>`articles`','']
]
let news = [
  [logo],
  ['`cmd`:`"news"`'],
  ['`JNews`',''],
  [
    'Latest News:',
    'ARRAY', // latest 5 news articles
    '',
    'To search for a specific news post, please choose a search method from below:',
    '1. title search    - `find`:`"name"`',
    '2. id search       - `get`:`"id"`',
    '3. date search     - ', // unsure whether it would be a viable search
    '4. top news posts  - `top`:`""`',
    ''
  ],
  ['home>`news`','']
]
let lists = [
  [logo],
  ['`cmd`:`"lists"`'],
  ['`JLists`',''],
  [
    'BODY',
    ''
  ],
  ['home>`lists`','']
]
let api = [
  [logo],
  ['`cmd`:`"api"`']
  ['`JAPI`',''],
  [
    'BODY',
    ''
  ],
  ['home>`api`','']
]
let profiles = [
  [logo],
  ['nav'],
  ['name',''],
  [
    'BODY',
    ''
  ],
  ['home>`profiles`','']
]
let help = [
  [logo],
  ['nav'],
  ['name',''],
  [
    'BODY',
    ''
  ],
  ['home>`help`','']
]
let login = [
  [logo],
  ['nav'],
  ['name',''],
  [
    'BODY',
    ''
  ],
  ['home>`login`','']
]
let register = [
  [logo],
  ['nav'],
  ['name',''],
  [
    'BODY',
    ''
  ],
  ['home>`register`','']
]

 let pageArr = [
      logo,
      nav,
      title,
      body,
      footer
    ]
 
 

`LOGO
=====================================================================
|      \@@@@@@@@@@@@@*          d8888  8888888b.    888				      |
|   @@@@@@@@@@@@@@@@@@@@@      d88888  888   Y88b   888				      |
|   @@@@@@@@@@@@@@@@@@@@@     d88P888  888    888   888				      |
|      @@@@@@@@@@@@@@@       d88P 888  888   d88P   888			       	|
|    @@.              @@    d88P  888  8888888P"    888				      |
|   @@@@@@@@@@@@@@@@@@@@@  d88P   888  888          888				      |
|    *@@@@@@@@@@@@@@@@@.  d8888888888  888     d8b  888			       	|
|                        d88P     888  888     Y8P  88888888		    |
|                        ATHENAEUM	   PUBLIC       LIBRARY			    |
=====================================================================
`

`
NAVIGATION BAR
`

`
=====================================================================
`

`
STACKTRACE (IF REQUESTED)
=====================================================================
`

`
MAIN BODY
`

`
=====================================================================
`
`
/////////////////////////////////////////////////////////////////////

=====================================================================
|      \@@@@@@@@@@@@@*          d8888  8888888b.    888				      |
|   @@@@@@@@@@@@@@@@@@@@@      d88888  888   Y88b   888				      |
|   @@@@@@@@@@@@@@@@@@@@@     d88P888  888    888   888				      |
|      @@@@@@@@@@@@@@@       d88P 888  888   d88P   888			       	|
|    @@.              @@    d88P  888  8888888P"    888				      |
|   @@@@@@@@@@@@@@@@@@@@@  d88P   888  888          888				      |
|    *@@@@@@@@@@@@@@@@@.  d8888888888  888     d8b  888			       	|
|                        d88P     888  888     Y8P  88888888		    |
|                        ATHENAEUM	   PUBLIC       LIBRARY			    |
=====================================================================
ap.l/home
=====================================================================
SPINNING UP SYSTEM. . .
PROCESSING INPUT. . .
INPUT PROCESSED. CREATING home PAGE. . .
PAGE COMPLETED. RETURNING OUT TO <context.caller>.
=====================================================================
Welcome to APL. To begin, select an [option] below:
  1. (read_content)
	2. (see_news)
	3. (get_profiles)

Questions? Use (help) to get more information.
Have an account? Please (login) to begin.
=====================================================================

/////////////////////////////////////////////////////////////////////

=====================================================================
|      \@@@@@@@@@@@@@*          d8888  8888888b.    888				      |
|   @@@@@@@@@@@@@@@@@@@@@      d88888  888   Y88b   888				      |
|   @@@@@@@@@@@@@@@@@@@@@     d88P888  888    888   888				      |
|      @@@@@@@@@@@@@@@       d88P 888  888   d88P   888			       	|
|    @@.              @@    d88P  888  8888888P"    888				      |
|   @@@@@@@@@@@@@@@@@@@@@  d88P   888  888          888				      |
|    *@@@@@@@@@@@@@@@@@.  d8888888888  888     d8b  888			       	|
|                        d88P     888  888     Y8P  88888888		    |
|                        ATHENAEUM	   PUBLIC       LIBRARY			    |
=====================================================================
ap.l/about
=====================================================================
=====================================================================
<INFORMATION ABOUT APL HERE>
=====================================================================

/////////////////////////////////////////////////////////////////////

=====================================================================
|      \@@@@@@@@@@@@@*          d8888  8888888b.    888				      |
|   @@@@@@@@@@@@@@@@@@@@@      d88888  888   Y88b   888				      |
|   @@@@@@@@@@@@@@@@@@@@@     d88P888  888    888   888				      |
|      @@@@@@@@@@@@@@@       d88P 888  888   d88P   888			       	|
|    @@.              @@    d88P  888  8888888P"    888				      |
|   @@@@@@@@@@@@@@@@@@@@@  d88P   888  888          888				      |
|    *@@@@@@@@@@@@@@@@@.  d8888888888  888     d8b  888			       	|
|                        d88P     888  888     Y8P  88888888		    |
|                        ATHENAEUM	   PUBLIC       LIBRARY		      |
=====================================================================
ap.l/login
=====================================================================
=====================================================================
To login, use the following format.
    For single-user login - {login:true}
	For multi-user login - {login:"<user>",password:"<here>"}

Do not have an account? Use {option:"register"} to create one.
=====================================================================
`