function (c,a) {

// Variable Setup
    let lib = #fs.scripts.lib();
    let lockList = #fs.meta.t1_lock_list();
    let loc = a.loc;
    let info = {};
    let terminated = false;
    let locArgs = a.obj;
    let locResponse, currentLock, lockName;
    let o1k, o1v, o2k, o2v, o3k, cNum;

// Function Setup
    const isTerminated = (str) => {
        return str.includes("terminated.");
    }
    const isLockSolved = (str) => {
        let newStr = str.split("\n").pop();
        return newStr.includes("Denied");
    }
    const isParamSolved = (str, nextKey) => {
        let newStr = str.split("\n").pop();
        return newStr.includes(nextKey);
    }
    const bruteSolve = (key, value, nextKey) => {
        let i = 0;
        for (i = 0; i < value.length; i++) {
            locArgs[key] = value[i];
            locResponse = loc.call(locArgs);

            if (isTerminated(locResponse) || isLockSolved(locResponse) || isParamSolved(locResponse, nextKey)) {
                cNum = i;
                break;
            }
        }
        return;
    }
    const cSolve = (key, lastValue, num) => {
        let i = num;
        let j = 4;
        let k = 5;
        let h;
        
        if(key === "color_digit") {
            locArgs[key] = locArgs[lastValue].length;
            locResponse = loc.call(locArgs);
            return;

        } else if (key === "c002_complement") {
            h = i + j;

            if (h > 7) {
                h -= 8;
            }
            locArgs[key] = lastValue[h];
            locResponse = loc.call(locArgs);
            return;

        } else if (key === "c003_triad_1") {
            let o3k = "c003_triad_2";
            j = 3;
            h = i + j;

            if (h > 7) {
                h -= 8;
            }
            locArgs[key] = lastValue[h];

            h = i + k;
            
            if (h > 7) {
                h -= 8;
            }
            locArgs[o3k] = lastValue[h];
            locResponse = args.loc.call(locArgs);
            return;
        }
        throw new Error("\n" + "Lock Unknown." + JSON.stringify([currentLock[lockName],locArgs,locResponse]));
    }

// Core Logic
    locResponse = loc.call(loc);
    if (isTerminated(locResponse)) {
        terminated = true;
    }
    if (terminated === false) {
        do {
    // INFO
            for (let item in lockList) {
                let resp = locResponse.split(" ").splice(-2)[0].replace(/`[0-9A-Za-z](?!:.?`)([^`\n]+)`/g,"$1").toLowerCase();
                if (resp === lockList[item].name) {
                    currentLock = lockList[item];
                    o1k = currentLock.keys.option1;
                    o1v = currentLock.vals.option1 || null;
                    o2k = currentLock.keys.option2 || null;
                    o2v = currentLock.vals.option2 || null;
                    o3k = currentLock.keys.option3 || null;

                    break;
                }
            }

    // SOLUTION
            bruteSolve(o1k, o1v, o2k);

            if (isTerminated(locResponse)) {
                terminated = true;
                continue;

            } else if (isLockSolved(locResponse)) {
                continue;

            } else if (isParamSolved(locResponse,o2k) && lib.is_arr(o2v)) {
                bruteSolve(o2k,o2v,o3k);

            } else if (isParamSolved(locResponse, o2k)) {
                cSolve(o2k,o1v,cNum);

            } else {
               throw new Error("\n" + 'A problem was found. (value solve error) ' + JSON.stringify([lock[name],locArgs, locResponse])); 
            }

            if (isTerminated(locResponse)) {
                terminated = true;
            }

        } while (terminated === false);
    }

// Successful Solve Output Logic
    return {
        last_response:locResponse,
        loc_arguments:locArgs,
        last_lock:currentLock.name
    }
}