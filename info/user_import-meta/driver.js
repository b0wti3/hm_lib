function (context, args) {
// MetaSploit NPC Loc Breach Driver
    // Version: Beta 1.0
    // Description: This houses the core logic that makes MetaSploit's loc breacher work.
    // Beta Change Log:
        // 7/11/2018

    // Top Level Variable Setup
    let loc = args.loc;
    let locArgs = args.obj;
    let page;
    // Driver Logic Tree
    // is the loc a tier one loc?
    if (args.tier === 1) {

        // Solve Code / Script Below:
        let script = (obj) => #fs.meta.t1_npc_solver(obj);
        page = script({
            loc:loc,
            obj:locArgs
        });
        return page;
    }
    else if (args.tier === 2) {
        // Not implemented
    }
    else if (args.tier === 3) {
        // Not implemented
    }
    throw new Error('Error! Something went screwy. . .');
}