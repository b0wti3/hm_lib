function (context,args) {
//TO DO LIST:
// * Improve / Edit Code Comments, and test ALL functions
// * Replace to-do list with version information
// * Have a party, cause the code works! \o/
  const userDB = #fs.pira.user_db_library()
  const lib = #fs.scripts.lib()
  let obj = {
  //Admin Commands
    raw:{
      f:(q,p)=>userDB.f(q,p),
      u:(q,a)=>userDB.u(q,a),
      u1:(q,a)=>userDB.u1(q,a),
      us:(q,a)=>userDB.us(q,a),
      i:i=>userDB.i(i),
      r:r=>userDB.r(r)
    },
    admin:{
      createUser(input,confirm = false){ // Creates a user based on input. imput must not be empty, there must be a property called name
        if (!input) {
          return {success:false,type:'input_error',msg:'To create a user, use `Ninput`:{`L<field>`:<value>}. Pass multiple field/value pairs to further customize your new user.'} // No input included
        } else if (!('name' in input)) {
          return {success:false,type:'input_error',msg:'Cannot create an account without a name.'} // No name included (name required)
        }
        let query = userDB.f({name:input.name}).first()
        if (query) {
          return {success:false,type:'db_error',msg:'Name is already taken.'}
        } else {
          let user = userDB.User(input)
          if ('type' in input) {
            if (input.type === 'system') {
              user.isSystem = true
            }
          }
          if ('group' in input) {
            if (lib.is_str(input.group)) {
              user.group.push(input.group)
            } else if(lib.is_arr(input.group)) {
              user.group = input.group
            }
          }
          if ('role' in input) {
            if (input.role === 'admin') {
              user.role = 'admin'
            }
          }
          if ('verified' in input) {
            if (input.verified === true) {
              user.verified = true
            }
          }
          if (confirm === true) {
            userDB.i(user)
            let account = userDB.f({_id:user._id}).first()
            return {
              success:true,
              msg:[
                'The following user was successfully created:',
                account
              ]
            }
          } else {
            return {
              success:false,
              type:'confirm',
              msg:[
                'User to be created:',
                user,
                'Please continue to add `Ninput`, or confirm user\'s creation with `Nconfirm`:`Vtrue`:'
              ]
            }
          }
        }      
      },
      findUsers(query){ // Queries database for User Documents based on field values
        let input = {
          model:'User'
        }
        if (!query) {
          return {
            success:false,
            type:'input_error',
            msg:[
              'To query for users, use one or more of the fields below as `Nquery`:{`L<field>`:`V<value>`}.',
              '  `Lname`:``V"<string>"`',
              '  `LuserType`:`V"<string:sentience,intelligence,bot,system>"`',
              '  `Lrole`:`V"<string:member,admin>"`',
              '  `Lverified`:`V<bool>`',
              '  `Lgroup`:`V[<array of string(s)>]`'
            ]
          }
        }
        if ('name' in query) {
          input.name = query.name
        }
        if ('userType' in query) {
          input.userType = query.userType
        }
        if ('role' in query) {
          input.role = query.role
        }
        if ('verified' in query) {
          input.verified = query.verified
        }
        if ('group' in query) {
          if (lib.is_arr(query.group)) {
            input.group = query.group
          }
        }

        let result = userDB.f(input,{password:0}).array() //DANGER: Can be a long calling function!
        if (!result) {
          return {success:false,type:'db_error',msg:'No users found.'}
        } else {
          return {
            success:true,
            msg:[
              'User(s) found:',
              result
            ]
          }
        }
      },
      getUser(queryId){ // Queries database for a unique User Document using it's _id
        if (!queryId) {
          return {
            success:false,
            type:'input_error',
            msg:'To query for a specific user, use `Nquery`:{`L_id`:{`N"$oim"`:`V"<string>"`}}'
          }
        } else if (!lib.is_obj(queryId)) {
          return {success:false,type:'input_error',msg:'The `Nquery` `L_id` must be an object.'}
        }
        let result = userDB.f({_id:queryId},{password:0}).first()
        if (!result) {
          return {success:false,type:'db_error',msg:'User not found.'}
        } else {
          return {success:true,msg:'User found:',user:result}
        }
      },
      editUser(queryId,input,confirm = false){ // Updates a single User Document queried by using it's _id
        if (!queryId || !input) {
          return {
            success:false,
            type:'input_error',
            msg:[
              'To edit a specific user, use `Nquery`:{`L_id`:{`N"$oim"`:`V"<string>"`}},`Ninput`:{`L<field>`:`V<value>`}',
              '',
              'Fields available for `Ninput`:',
              '  `Lname`:`V"<string>"`',
              '  `Lverified`:`V<bool:true>`',
              '  `Lgroup`:`V"<string to add>"` `1OR` `V[<array of strings to replace>]`',
              '  `Larticles`:`"<string to add>"` `1OR` `V[<array of strings to replace>]`',
              '  `Llists`:`"<string to add>"` `1OR` `V[<array of strings to replace>]`'
            ]
          }
        } else if (!lib.is_obj(queryId)) {
          return {success:false,type:'input_error',msg:'The `Nquery` `L_id` must be an object.'}
        } else if (!lib.is_obj(input)) {
          return {success:false,type:'input_error',msg:'The `Ninput` must be an object.'}
        }
        let change = {}
        let result = userDB.f({_id:queryId},{password:0}).first()
        if (!result) {
          return {success:false,type:'db_error',msg:'User not found.'}
        } else {
          if ('name' in input && input.name !== result.name) {
            let check = userDB.f({name:input.name}).first()
            if (check) {
              return {success:false,type:'input_error',msg:'Name already used.'}
            } else {
              if (result.use === 'password') {
                change.name = input.name
              } else {
                return {
                  success:false,
                  type:'account_error',
                  msg:'Cannot change the name of a single-user account.'
                }
              }
            }
          }
          if ('verified' in input) {
            if (result.verified === false && input.verified === true) {
              change.verified = true
            }
          }
          if ('group' in input) {
            change.group = result.group
            if (lib.is_str(input.group)) {
              change.group.push(input.group)
            } else if (lib.is_arr(input.group)) {
              change.group = input.group
            }
          }
          if ('articles' in input) {
            change.articles = result.articles
            if (lib.is_str(input.articles)) {
              change.articles.push(input.articles)
            } else if (lib.is_arr(input.articles)) {
              change.articles = input.articles
            }
          }
          if ('lists' in input) {
            change.lists = result.lists
            if (lib.is_str(input.lists)) {
              change.lists.push(input.lists)
            } else if (lib.is_arr(input.lists)) {
              change.lists = input.lists
            }
          }
        }
        if (confirm === true) {
            userDB.u1({_id:result._id},{$set:change})
            let newResult = userDB.f({_id:result._id},{password:0}).first()
            return {
              success:true,
              msg:[
                'The following user was updated:',
                newResult
              ]
            }
        } else {
          for (let key in result) {
            if (key in change) {
              continue
            } else {
              change[key] = result[key]
            }
          }
          return {
            success:false,
            type:'confirm',
            msg:[
              'Please confirm the update of this user with `Nconfirm`:`Vtrue`:',
              change
            ]
          }
        }
      },
      deleteUser(queryId, confirm = false){ // Removes a single User Document queried by the _id string
        if (!queryId) {
          return {
            success:false,
            type:'input_error',
            msg:'To delete for a specific user, use `Nquery`:{`L_id`:{`N"$oim"`:`V"<string>"`}}'
          }
        } else if (!lib.is_obj(queryId)) {
          return {success:false,type:'input_error',msg:'The `Nquery` `L_id` must be an object.'}
        }
        let result = userDB.f({_id:queryId},{password:0}).first()
        if (!result) {
          return {success:false,type:'db_error',msg:'User not found.'}
        } else {
          if (confirm === true) {
            userDB.r({_id:result._id})
            return {
              success:true,
              msg:[
                'User deleted successfully.',
                result
              ]
            }
          } else {
            return {
              success:false,
              type:'confirm',
              msg:[
              'Please confirm the deletion of this user with `Nconfirm`:`Vtrue`.',
              result
              ]
            } // Shows User Document that user is asking to delete; require user to confirm:"true"
          }
        }
      },
      verifyUser(queryId,confirm = false){  // Sets the verified field on a User Document queried by the _id string to true when executed.
        if (!queryId) {
          return {
            success:false,
            type:'input_error',
            msg:'To find and verify a user\'s account, use `Nquery`:{`L_id`:{`N"$oim"`:`V"<string>"`}}.'
          }
        } else if (!lib.is_obj(queryId)) {
          return {success:false,type:'input_error',msg:'The `Nquery` `L_id` must be an object.'}
        }
        let result = userDB.f({_id:queryId},{password:0}).first()
        if (!result) {
          return {success:false,type:'db_error',msg:'User not found.'}
        } else {
          if (confirm === true) {
            userDB.u1({_jd:result._id},{$set:{verified:true}}) // Set verified field to true, which allows the user to access member commands.
            return {success:true,msg:'User ' + result.name + ' has been verified.'}
          } else {
            return {
              success:false,
              type:'confirm',
              msg:[
               'Please confirm the verification of this user with `Nconfirm`:`Vtrue`',
                result
              ]
            } // Require user to confirm:"true"
          }
        }
      }
    },
    member:{
      editAccount(userId,input,confirm = false){ // Fetches the user's User Document and updates it based on user input
        //Note user input provided will always be the name of the user currently logged in
        //Note confirm = false may be redundent depending on whether the Back End Sets it as well
        if (!input) {
          return {
            success:false,
            type:'input_error',
            msg:[
              'To edit your account, please use `Ninput`:{`L<field>`:`V<value>`}.',
              '',
              'Choose one of the following field-value options below:',
              '  `Nname`:`V"<string>"`',
              '  `Npassword`:`V"<string>"`',
              '  `Nuse`:`V"<string:password,username>"`'
            ]
          }
        }
        let result = userDB.f({_id:userId}).first()
        let change = {}
        if (!result) {
          return {success:false,msg:'Account does not exist.'}
        } else {
          if (result.use === 'username') {
            if ('name' in input && (!input.use && !input.password)) {
              let check = userDB.f({name:input.name}).first()
              if (check) {
                return {success:false,type:'input_error',msg:'Name already used.'}
              } else {
                change.name = input.name
                change.use = 'password'
                change.password = false
              }
            } else if ('use' in input && (!input.name && !input.password)) {
              if (input.use === 'password') {
                change.use = 'password'
                change.password = false
              } else {
                return {success:false,type:'input_error',msg:'Invalid entry.'}
              }
            } else if ('password' in input && (!input.use && !input.name)) {
              change.use = 'password'
              change.password = input.password
            } else {
              return {success:false,type:'input_error',msg:'Invalid entry.'}
            }
          } else if (result.use === 'password') {
            if ('name' in input && (!input.use && !input.password)) {
              let check = userDB.f({name:input.name}).first()
              if (check) {
                return {success:false,type:'input_error',msg:'Name already used.'}
              } else {
                change.name = input.name
              }
            } else if ('use' in input && (!input.name && !input.password)) {
              if (input.use === 'username') {
                change.use = 'username'
                change.password = false
              } else {
                return {success:false,type:'input_error',msg:'Invalid entry.'}
              }
            } else if ('password' in input && (!input.use && !input.name)) {
              change.password = input.password
            } else {
              return {success:false,type:'input_error',msg:'Invalid entry.'}
            }
          }
        }
        if (confirm === true) {
            userDB.u1({_id:result._id},{$set:change})
            let newResult = userDB.f({_id:result._id},{name:1,use:1,password:1}).first()
            return {
              success:true,
              msg:[
                'Account updated:',
                newResult
              ]
            }
        } else {
          return {
            success:false,
            type:'confirm',
            msg:'Please confirm the update of your account with `Nconfirm`:`Vtrue`.'
          }
        }
      },
      deleteAccount(userId,confirm = false){ // Fetches the user's User Document and allows them to delete their own User Document / Account
        //Note - user input provided will always be the name of the user currently logged in
        let result = userDB.f({_id:userId},{name:1}).first()
        if (!result) {
          return {success:false,type:'db_error',msg:'Account does not exist.'}
        } else if (confirm === true) {
          userDB.r({_id:result._id})
          return {success:true,msg:'User deleted successfully.'}
        } else {
          return {
            success:false,
            type:'confirm',
            msg:[
              'Please confirm the deletion of your account with `Nconfirm`:`Vtrue`:',
              result.name
            ]
          } // Shows user their User Document that they are asking to delete; require user to confirm:"true"
        }
      },
      viewAccount(userId){ // Fetches the user's User Document and shows user content pulled from their User Document (Does not fetch password field)
        //Note: user input provided will always be the name of the user currently logged in
        let result = userDB.f({_id:userId},{name:1,password:1,userType:1,isBot:1,_id:0}).first()
        if (!result) {
          return {success:false,type:'db_error',msg:'Account does not exist.'}
        } else {
          return {
            success:true,
            msg: [
              'Your acount details were found.',
              result
            ]
          }
        }
      },
      authAccount(caller,credentials){
        if (!credentials) {
          return {
            success:false,
            type:'auth_error',
            msg:[
              'Please `Nlogin` using {`Luser`:<string>, `Lpassword`:<string>} for multi-user accounts, or {`Luser`:`Vtrue`} to login to your single user account.',
              ''
            ]
          }
        }
        let account
        if (credentials.password) {
          account = userDB.f({name:credentials.user},{name:1,password:1,use:1,role:1}).first()
          if (account && account.use === 'password') {
            return {success:true,user:account}
          }
        } else if (credentials.user === true) {
          account = userDB.f({name:caller},{name:1,password:1,use:1,role:1}).first()
          if (account && account.use === 'username') {
            return {success:true,user:account}
          }
        }
        return {success:false,type:'auth_error',msg:'Invalid `Luser` or `Lpassword`'}
      }
    },
    guest:{
      createAccount(u,input,confirm = false){ // Creates an account for a user, and ONLY allows its type as bot, else defaults to sentience (if tied to a specific user) or intelligence (if tied to a password)
        let query,user
        if (!input || (lib.is_str(input) && input.length === 0)) {
          return {
            success:false,
            type:'input_error',
            msg:[
              'To create an account, use `Ninput`:{`L<field>`:<value>}. Pass multiple field-value pairs to further customize your new acount.',
              '',
              'The following fields are required:',
              '  For a single-user account:   `Lname`:`Vtrue`',
              '  For a multi-user account:    `Lname`:`V"<string>"`,`Lpassword`:`V"<string>"`',
              '',
              'The following field is optional:',
              '  To create a bot account:     `Lbot`:`Vtrue`'
            ]
          }
        }
        if ('name' in input && input.name === true) {
          query = userDB.f({name:u}).first()
          if (query) {
            return {success:false,type:'db_error',msg:'Name is already taken.'}
          } else {
            user = userDB.User({name:u})
          }
        } else if (('name' in input && lib.is_str(input.name) && input.name.length > 0) && ('password' in input && lib.is_str(input.password) && input.password.length > 0)) {
          query = userDB.f({name:input.name}).first()
          if (query) {
            return {success:false,type:'db_error',msg:'Name is already taken.'}
          } else {
            user = userDB.User(input)
          }
        } else {
          return {
            success:false,
            type:'input_error',
            msg:'Invalid input. Please see list of options with `Ncmd`:`V"create_self"`,`Ninput`:`V""`'
          }
        }
        if ('bot' in input && input.bot === true) {
          user.isBot = true
        }
        let account = {
          name:user.name,
          password:user.password,
          userType:user.userType,
          isBot:user.isBot
        }
        if (confirm === true) {
          userDB.i(user)
          return {
            success:true,
            msg:[
              'The following user was successfully created:',
              account
            ]
          }
        } else {
          return {
            success:false,
            type:'confirm',
            msg:[
              'Account to be created:',
              account,
              'Please continue to add `Ninput`, or confirm account\'s creation with `Nconfirm`:`Vtrue`:'
            ]
          }
        }
      }
    }
  }
  return obj
}