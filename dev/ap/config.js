function (context,args) {
  let obj = {
    closed:true,
    page_settings:{
      column_length:70,
      body_length:30
    },
    puzzle_level:0,
    whitelist_on:true,
    whitelist:[],
    owner:'meta',
    trusted:['meta','ap','pira'],
  }
  return obj
}