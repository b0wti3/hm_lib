function(context, args)
{
    // Main Splash Image
    let baseArr = [];
    
    let pageLine = "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
    let mainPage = [
        pageLine,
        "+                        WELCOME TO THE                       +",
        "+   ___  _____ __  __ _____ __  __  ___  _____ __ __ ___  __  +",
		"+  ||=||  ||   ||==|| ||__  ||\\\\|| ||=|| ||__  || || || \\/ |  +",
		"+  || ||  ||   ||  || ||___ || \\|| || || ||___ \\\\_\/\/ ||    |  +",
        "+                                                             +",
        "+    	     __    __ ____  _____  ___  _____ _  _            +",
        "+    	     ||    || ||=)  ||_\/\/ ||=|| ||_\/\/ \\\\\/\/            +",
        "+    	     ||__| || ||_)) || \\\\ || || || \\\\  \/\/             +",
        "+                                                             +",
        pageLine
    ];
    
    let pageMessage = [
        "+  `eThis script is still under-construction. Try again later.`  +",
        pageLine
    ];

    //Creation of Main Page on baseArr; Returns it to caller.
    baseArr.push(mainPage,pageMessage);

    return baseArr;
}
