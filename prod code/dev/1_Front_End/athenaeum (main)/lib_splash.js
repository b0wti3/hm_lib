function(context, args)
{
    // Main Splash Image
    let baseArr = [];
    
    let logo = [
        "       `H\\@@@@@@@@@@@@@*`        `J_______       _`",
        "    `H@@@@@@@@@@@@@@@@@@@@@`    `J(_______)  _  | |`",
        "    `H@@@@@@@@@@@@@@@@@@@@@`     `J_______ _| |_| |__  _____ ____  _____ _____ _   _ ____`",
        "      `H,@@@@@@@@@@@@@@@,`      `J|  ___  (_   _)  _ \\| ___ |  _ \\(____ | ___ | | | |    \\`",
        "    `I@                  .@`    `J| |   | | | |_| | | | ____| | | \\ ___ | ____| |_| | | | |`",
        "    `I@@@@@@@@@@@@@@@@@@@@@`    `J|_|   |_|  \\__)_| |_|_____)_| |_\\_____|_____)____\\|_|_|_|`",
        "    `I%@@@@@@@@@@@@@@@@@@@%`",
        "         `I#@@@@@@@@@(`          `J_       _ _`",
        "    `J@@@.             ,@@@`    `J(_)     (_) |`",
        "    `J@@@@@@@@@@@@@@@@@@@@@`     `J_       _| |__   ____ _____  ____ _   _`",
        "     `J*@@@@@@@@@@@@@@@@@.`     `J| |     | |  _ \\ \\ ___|____ |\\ ___) | | |`",
        "                             `J| |_____| | |_) ) |   \\ ___ | |   | |_| |`",
        "    `K@@@@@@&\\,...,(&@@@@@@`    `J|_______)_|____\\|_|   \\_____|_|    \\__  |`",
        "    `K@@@@@@@@@@@@@@@@@@@@@` 	                                     `J(____\/`",
        "       `K\\@@@@@@@@@@@@@*`"
    ];
    let page = [
	   logo,
	   "",
	   "`JWelcome to the Atheneaum Public Library (APL)`",
       "`BThe Atheneaum RePository is currently under construction. Please come back later.`",
       "`T-M`"
	   /*"	`JPlease select a` `Ncategory` `Jfrom the list below.`",
	   "		1. `Vtop` articles",
	   "		2. `Varticle` search",
	   "		3. `Vnews`",
	   "		4. `Vlink` lookup",
	   "		5. user `Vprofile` lookup",
	   "",
	   "	`HFor more commands, use` { `Nget`:\"`Vhelp`\"}" */
    ]

    //Creation of Main Page on baseArr; Returns it to caller.
    baseArr.push(page);

    return baseArr;
}
