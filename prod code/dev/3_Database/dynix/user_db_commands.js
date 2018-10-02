function (context,args) {
//TO DO LIST:
// * Finish editUser admin command - merge and protect fields
// * Finish editAccount member command - only allow editing of specific fields, one at a time
// * Add error message output & handling to all functions
// * Test whether closure on userDB commands works the way 'obj' is structured and handled
// * Improve / Edit Code Comments, and test ALL functions
// * Replace to-do list with version information
// * Have a party, cause the code works! \o/

  const userDB = #fs.dynix.public({authKey:'supersecretkey',script:'db_lib'})
  const lib = #fs.scripts.lib()
  let obj = {
  //Admin Commands
    admin:{
      createUser:(input,confirm = false)=>{ // Creates a user based on input. imput must not be empty, there must be a property called name
        if (!input) {
          return {success:false} // No input included
        } else if (!('name' in input)) {
          return {success:false} // No name included (name required)
        }
        let query = userDB.f({name:input.name})
        if (query) {
          return {success:false}
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
            return {ok:true}
          } else {
            return {success:false}
          }
        }      
      },
      findUsers:(query)=>{ // Queries database for User Documents based on field values
        let input = {}
        if (!query) {
          return {success:false}
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
          input.group = query.group
        }

        let result = userDB.f(input,{password:0}).array() //DANGER: Can be a long calling function!
        if (!result) {
          return {success:false}
        } else {
          return result
        }
      },
      getUser:(queryId)=>{ // Queries database for a unique User Document using it's _id
        let result = userDB.f({_id:queryId},{password:0})
        if (!result) {
          return {success:false}
        } else {
          return result
        }
      },
      editUser:(queryId,input,confirm = false)=>{ // Updates a single User Document queried by using it's _id
        let change = {}
        let result = userDB.f({_id:queryId},{password:0})
        if (!result) {
          return {success:false}
        } else {
          if (!input) {
            return {success:false}
          } else {
            if ('name' in input && input.name !== result.name) {
              let check = userDB.f({name:input.name})
              if (check) {
                return {success:false}
              } else {
                if (check.isSystem === true) {
                  change.name = input.name
                }
              }
            }
            if ('verified' in input) {
              if (result.verified === false && input.verified === true) {
                change.verified = true
              }
            }
            if ('group' in input) {
              change.group = []
              if (lib.is_str(input.group)) {
                change.group.push(input.group)
              } else if (lib.is_arr(input.group)) {
                change.group = input.group
              }
            }
            if ('articles' in input) {
              change.articles = []
              if (lib.is_str(input.articles)) {
                change.articles.push(input.articles)
              } else if (lib.is_arr(input.articles)) {
                change.articles = input.articles
              }
            }
            if ('lists' in input) {
              change.lists = []
              if (lib.is_str(input.lists)) {
                change.lists.push(input.lists)
              } else if (lib.is_arr(input.lists)) {
                change.lists = input.lists
              }
            }
          }
        }
        if (confirm === true) {
            userDB.u1({_id:result._id},{$set:change})
            return {ok:true}
        } else {
          return {success:false} // Show difference between current User Document and proposed update to User Document; require user to confirm:"true"
        }
      },
      deleteUser:(queryId, confirm = false)=>{ // Removes a single User Document queried by the _id string
        let result = userDB.f({_id:queryId},{password:0})
        if (!result) {
          return {success:false}
        } else {
          if (confirm === true) {
            userDB.r({_id:result._id})
            return {ok:true}
          } else {
            return {success:false} // Shows User Document that user is asking to delete; require user to confirm:"true"
          }
        }
      },
      resetPassword:(queryId,confirm = false)=>{ // Sets password field on a user to a unique value that sets a password reset event for the next time the user logs in
        let result = userDB.f({_id:queryId},{password:1})
        if (!result) {
          return {success:false}
        } else {
          if (confirm === true) {
            userDB.u1({_id:result._id},{$set:{password:true}}) // Set password field to true, which sets a trigger for the next time a user tries to login
            return {ok:true}
          } else {
            return {success:false} // Require user to confirm:"true"
          }
        }
      },
      verifyUser:(queryId,confirm = false)=>{  // Sets the verified field on a User Document queried by the _id string to true when executed.
        let result = userDB.f({_id:queryId},{password:0})
        if (!result) {
          return {success:false}
        } else {
          if (confirm === true) {
            userDB.u1(_jd:result._id},{$set:{verified:true}}) // Set verified field to true, which allows the user to access member commands.
            return {ok:true}
          } else {
            return {success:false} // Require user to confirm:"true"
          }
        }
    },
    member:{
      editAccount:(user,input,confirm = false)=>{ // Fetches the user's User Document and updates it based on user input
        //Note: user input provided will always be the name of the user currently logged in
        //Note: confirm = false may be redundent depending on whether the Back End Sets it as well
        let result = userDB.f({name:user})
        let change = {}
        if (!result) {
          return {success:false}
        } else {
          if (!input) {
            return {success:false}
          } else {
            if ('password' in input) {
              //apply password authentication and rules
              //set use field to 'password', and password field to inputted pw
            } else if ('use' in input) {
              if (result.use === 'password' && input.use === 'user') {
                change.use = user
                change.password = false
              }
            } else if ('name' in input) {
              let check = userDB({name:input.name})
              if (check) {
                return {success:false}
              } else {
                change.name = input.name
              }
            }
          }
          if (confirm === true) {
            userDB.u1({_id:result._id},{$set:change}) //Uses set commands for specific fields of the User Document to change values. Fields that can be changed by a member are: ['password','use','name']. This allows changes of name, password, and retying of accounts to different sentiences (AKA hm users).
          } else {
            //show changes and ask user to confirm:"true"
            return {success:false}
          }
        }
      }, // FUNCTION UNFINISHED!
      deleteAccount:(user,confirm = false)=>{ // Fetches the user's User Document and allows them to delete their own User Document / Account
        //Note: user input provided will always be the name of the user currently logged in
        let result = userDB.f({name:user}).first()
        if (!result) {
          return {success:false}
        } else {
          if (confirm === true) {
            userDB.r({_id:result._id})
            return {ok:true}
          } else {
            return {success:false} // Shows user their User Document that they are asking to delete; require user to confirm:"true"
          }
        }
      },
      viewAccount:(user)=>{ // Fetches the user's User Document and shows user content pulled from their User Document (Does not fetch password field)
        //Note: user input provided will always be the name of the user currently logged in
        let result = userDB.f({name:user}).first()
        if (!result) {
          return {success:false}
        } else {
          return result
        }
      },
      createPassword:(user,input,confirm = false)=>{ // Creates a password tied to a user's User Document, which then uncouples their account from a specific user, and sets user type to intelligence.
        let result = userDB.f({name:user}).first()
        if (!result) {
          return {success:false}
        } else {
          if (confirm === true) {
            if (!input) {
              return {success:false}
            } else if ('password' in input) {
              userDb.u1({_id:result._id},{$set:{password:input.password}})
              return {ok:true}
            }
          }
        }
      }
    },
    guest:{
      createAccount:(input)=>{ // Creates an account for a user, and ONLY allows its type as bot, else defaults to sentience (if tied to a specific user) or intelligence (if tied to a password)
        if (!input) {
          return {success:false} // No input included
        } else if (!('name' in input)) {
          return {success:false} // No name included (name required)
        }
        let query = userDB.f({name:input.name})
        if (query) {
          return {success:false}
        } else {
          let user = UserModel(input)
          userDB.i(user)
          return {ok:true}
        }
      }
    }
  }
  return obj
}