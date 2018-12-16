function(context,args) {
  // Library /Variable Setup
  let content = #fs.meta.content()
  let page

  // Function Setup
  function createPage (body='',nav='') {
    let pageArr = [
      content.ms_logo,
      nav,
      body
    ]
    return pageArr
  }

  // Lock Cracker Interface
  if (!args) { // Home Page (No Args)
    page = createPage([
      '',
      '`BWelcome to` `TMeta``B.``JSploit`',
      '`BPlease choose an` `Noption` `Bbelow:`',
      '  `B[ 1.` `Vcrack` `Bsomething.  ]`',
      '  `B[ 2.` `Vscrape` `Bsomething. ]`',
      '',
      '`C[Future development in progress]`'
    ])
    return page
  } else if ('option' in args) {
    if (args.option === 'crack') {
      if ('tier' in args) {
        if (args.tier === 1 || args.tier === 'one') {
          if ('loc' in args) {
            if (args.loc.call && args.loc.name) {
              let obj = {
                loc:args.loc,
                tier:1,
                obj: args.obj || {}
              }
              page = #fs.meta.driver(obj)
              return page;
            } else {
              throw new Error('`BPlease input a valid` `Nloc``B.`')
            }
          } else {
            page = createPage([
              '',
              '`BPlease specify a` `Nloc` `Bto crack.`'
            ])
            return page
            throw new Error('`BPlease specify a` `Nloc``B.`')
          }
        } else {
          throw new Error('`BPlease input a valid tier.`')
        }
      } else {
        page = createPage([
          '',
          '`BTo begin cracking, choose the` `Ntier` `Bof loc you would like to crack.`',
          '`C[Currently only supports tier 1]`'
        ])
        return page
      }
    } else if (args.option === 'scrape') {
      if ('scraper' in args) {
        if (args.scraper === 'gibson') {
          page = createPage([
            '',
            '`CScript currently in development. Use` {`Noption`:`V"feature_list"`} `Bto see more information on features in development.` `C[Currently not implemented!]`'
          ])
          return page
        }
      } else {
        page = createPage([
          '',
          '`BTo begin scraping, choose the` `Nscraper` `Byou would like to use from below:`',
          '  `B[ 1.` `Vgibson` `Bscraper.` `C|` `BUsed to obtain tier 4 locs.  ]`'
        ])
        return page
      }
    //} else if (args.option === 'changelog') {
    //} else if (args.option === 'feature_list') {
    } else {
      throw new Error('`BPlease input a valid` `Noption``B.`')
    }
  } else {
    page = createPage([
      '',
      '`BThis script is managed and maintained by` `meta``B.`',
      "`BIt is currently in development. View this script's` `changelog` `Bto see a list of updates made to this script.` `C[Currently not implemented!]`"
    ])
    return page
  }
}