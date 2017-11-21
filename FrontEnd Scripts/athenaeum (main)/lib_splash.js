function(context, args)
{
    // Main Splash Image
    let heaD = ["+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"];
	let athenaeuM = [
        "+                        WELCOME TO THE                       +",
        "+   ___  _____ __  __ _____ __  __  ___  _____ __ __ ___  __  +",
		"+  ||=||  ||   ||==|| ||__  ||\\\\|| ||=|| ||__  || || || \\/ |  +",
		"+  || ||  ||   ||  || ||___ || \\|| || || ||___ \\\\_\/\/ ||    |  +"
    ].join("\n");
    let librarY = [
        "+    	     __    __ ____  _____  ___  _____ _  _            +",
        "+    	     ||    || ||=)  ||_\/\/ ||=|| ||_\/\/ \\\\\/\/            +",
        "+    	     ||__| || ||_)) || \\\\ || || || \\\\  \/\/             +",
        "+                                                             +"
    ].join("\n");
    let fooT = ["+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"];
    let athenaeum1 = heaD.concat(athenaeuM,librarY,fooT).join("\n");

    // Main Page Text

    let athenaeum2 = [
        //"+  Welcome to the ATHENAUM LIBRARY!",
        "+  `eThis script is still under-construction.` ",
        "`eTry again later.`  +",
        "\n",
        "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        ].join("");

    //Creation of Main Page Text; Returns it to caller.
    let athenaeum = athenaeum1 + "\n" + athenaeum2;
    return athenaeum;
}
