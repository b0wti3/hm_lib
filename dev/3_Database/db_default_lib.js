function (context, args) {
    
// NOTE: Make sure to add security functions to this script to prevent exploitation by other users.

// Library Required Setup
    const settings = #fs.<user>.config() || null;
    //if (settings === null) return "This user's settings could not be found.";
    
    // Object that gets returned at the end of script.
    let __obj = { };
    
// Database Command Functions

    // Creates a new document in a database
    __obj.create = function (object) {
        if (object) {
            #db.i(object);
            return true;
        }
        else return false;
    };

    // Finds an array of documents in a database.
    __obj.find = function (query) {
        if (query) {
            let result = #db.f(query).array();
            return result;
        }
        else return false;
    };

    // Finds one document in the database.
    __obj.findOne = function (query) {
        if (query) {
            let result = #db.f(query).first();
            return result;
        }
        else return false;
    };

    // Removes all documents from the database that matches the query.
    __obj.remove = function (query) {
        if (query) {
            #db.r(query);
            return true;
        }
        else return false;
    };

    // Deletes all documents inside the database.
    __obj.clear = function () {
        #db.r({});
    };

    // Updates all documents that matches the query.
    __obj.update = function (query, update) {
        #db.u(query, update);
    };

    // Updates a single document that matches the query.
    __obj.updateOne = function (query, update) {
        #db.u1(query, update);
    };

    return __obj;
}