function (args,solve,vrbs,pS) // target:#s.dtr.t1_lock_sim
{  

// T1 Lock Breaker for NPCs
//  Locks Supported:
//      EZ_21, EZ_35, EZ_40
//      c001, c002, c003, l0cket (most)
//  Arguments:
//      target:#s.<any t1 npc>
//      solved:{<an object with solutions for some/all the locks>}
//      verbose:true/false (whether to output logging for the entire script [true], or just the end result[false])
//      postScript:<any script I would like to call after this completes.>
    if (solve === undefined) {
        return "solve is undefined!";
    } else if (vrbs === undefined) {
        return "verbose is undefined!";
    } else if (pS === undefined) {
        return "postScript is undefined!";
    } else {
        return args;
    }
    
    
    //Variables Passed Into Script
    var comb = {};
    
    // Library for T1 Lock Names & Combinations
    // var t1locks = #fs.meta.t1lib()
    //var t1Names = t1locks.t1Names;
    var t1Combs = t1locks.t1Combs;

    //Response Variables
    var d = "Denied";
    var t = "terminated.";
    
    
    //Calculation Variables
    var h, i, j, k = 5;
    
    var r, rp;
    
    //Functions to find the Lock - both the full name the short version (first 3 characters).
    var rl = (arg) => {
        return arg.split(" ").splice(-2)[0].replace(/`[0-9A-Za-z](?!:.?`)([^`\n]+)`/g,"$1");
    };
    var tl = (arg) => { 
        return arg.toLowerCase();
    };
    var ts = (arg) => {
        return arg.substring(0,3);
    };
    
    //Lock & Option Variable Set-up
    var lock, option1, option2;
    
    //Cracker Functions
    var unvCrack = function(comboList) {
        for (i = 0; i < comboList.length; i++) {
            comb[lock] = comboList[i];
            r = args.target.call(comb);
            rp = r.split("\n").pop();
            if (rp.includes (option1) || rp.includes(t)) {
                return rp;
            }
        }
    }
    
    function eBreak() {
        if (lock === "ez_21") {
            for (i = 0; i < 3; i++) {
                comb[lock] = t1Combs.ezUnv[i];
                r = args.target.call(comb);
                rp = r.split("\n").pop();
                
                if (rp.includes(d) || rp.includes(t)) {
                    return rp;
                }
            }
        }
        
        else if (lock === "ez_35") {
            option1 = "digit";
            rp = unvCrack(t1Combs.ezUnv);
            for (i = 0; i < 10; i++) {
                comb[option1] = i;
                r = args.target.call(comb);
                rp = r.split("\n").pop();

                if (rp.includes(d) || rp.includes(t)) {
                    return rp;
                }
            }
        }

        else if (lock === "ez_40") {
            option1 = "ez_prime";
            rp = unvCrack(t1Combs.ezUnv);
            
            for (i = 0; i < t1Combs.ez40.length; i++) {
                comb[option1] = t1Combs.ez40[i];
                r = args.target.call(comb);
                rp = r.split("\n").pop();

                if (rp.includes(d) || rp.includes(t)) {
                    return rp;
                }
            }
        }
    }

    function cBreak() {
        if (lock === "c001") {
            option1 = "color_digit";
            rp = unvCrack(t1Combs.c0Unv);
            comb[option1] = t1Combs.c0Unv[i].length;
            r = args.target.call(comb);
            rp = r.split("\n").pop();
            return rp;
        }

        else if (lock === "c002") {
            option1 = "c002_complement";
            rp = unvCrack(t1Combs.c0Unv);
            j = 4;
            h = i + j;
            if (h > 7) {
                h -= 8;
            }
            comb[option1] = t1Combs.c0Unv[h];
            r = args.target.call(comb);
            rp = r.split("\n").pop();
            return rp;
        }

        else if (lock === "c003") {
            option1 = "c003_triad_1";
            option2 = "c003_triad_2";
            rp = unvCrack(t1Combs.c0Unv);
            j = 3;
            h = i + j;
            if (h > 7) {
                h -= 8;
            }
            comb[option1] = t1Combs.c0Unv[h];

            h = i + k;
            if (h > 7) {
                h -= 8;
            }
            comb[option2] = t1Combs.c0Unv[h];
            r = args.target.call(comb);
            rp = r.split("\n").pop();
            return rp;
        }
    }
    
    function lBreak() {
        rp = unvCrack(t1Combs.k3ys);
        return rp;
    }
    
    //Base Cracker Logic
    r = args.target.call(comb);
    rp = r.split("\n").pop();
    
    //Log Variable
    var scriptLog = {
        Last_Lock :   lock,
        Last_Response : rp,
        Parameters_Found : comb 
    }
    
    //Checks if the loc's connection terminated because of having no locks. If so, return log obj and end.
    if (rp.includes(t)) {
        return scriptLog;
    }
    
    lock = tl(rl(rp));
    i = ts(lock);


    // S T A R T   O F   H A C K //

    while (rp.includes(d)) {

        switch (i = ts(lock)) {
            case "ez_":
                eBreak();
                break;
            case "c00":
                cBreak();
                break;
            case "l0c":
                lBreak();
                break;
            default:
                return "ERROR! lock '" + lock + "' cannot be cracked by this script!";
        }
        lock = tl(rl(rp));
    }
    
    if (rp.includes(t)) {;
        return scriptLog;
    }
    else {
        scriptLog.ErrorMessage = "ERROR! Something went horribly wrong. . .";
        scriptLog.Last_Response = r;
        return scriptLog;
    }
}