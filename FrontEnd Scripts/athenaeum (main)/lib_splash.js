function(context, args)
{
    // Main Splash Image
    let baseArr = [];
    
    let pageLine = "            `A*-------------------------------*`"; 
    let closedBanner = [
    "                        `GWELCOME TO`",
    "                          `H______    ______`",
    "                   `H\/\\    (_____ \\  (_____ \\`",
    "                  `H\/  \\    _____) ) |_____) )`",
    "                 `H\/ \/\\ \\  ( ____ (  |  ____\/`",
    "                `H( (__) ) ) |  | |  | |`",
    "                `H|_)  (_| |_|  |_|  |_|`",
    "",
    pageLine,
    "            `A| The Atheneaum RePository is   |`",
    "            `A| currently under construction. |`",
    "            `A|   Please come back later!     |`",
    "            `A|`            `T- M`                `A|`",
    pageLine
];

    //Creation of Main Page on baseArr; Returns it to caller.
    baseArr.push(closedBanner);

    return baseArr;
}
