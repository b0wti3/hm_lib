function (context, args) {
// Database Controller Library

// Built to provide base access to an individual user's database
// Version: Alpha
// Access: Private, through 'db_access_pub.js'.

//  DEV NOTES:
//      The following operations are to be developed for this script:
//          1) Create a database to store data in. Either create a document and use it as the collection, or use entire user collection.
//          2) Use a model to create database instanced documents. Model should have a default, but also be able to be changed later.
//          3) Search and Lookup single / multiple documents inside database. Try to make both functions able to take special search params.  (clarify?)
//          4) Wipe database.
//          5) Update single / multiple documents inside database.
//          6) Look up database size.
//          7) Access and retrieve db non-standard access.

    const Database = function (name, type) {
        // Tries to find a database
        let __obj = { };
        
        let db = #db.f({dbName:name}).first();
        
        if (!db) {
            db.dbName = name || "test";
            db.dbType = type || "simple";
            #db.i(__obj);
        }
        
        __obj.database = db;

        __obj.create = function () {
            
        };

        __obj.remove = function () {
            
        };

        __obj.update = function () {
            
        };

        __obj.find = function () {
            
        };
        
        __obj.delete = function () {
            
        };
    };

}