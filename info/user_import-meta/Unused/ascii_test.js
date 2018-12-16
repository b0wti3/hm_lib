function(context, args)
{
    // Main Splash Image
    let heaD = ["+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"];
	let atheneauM = [
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
    let atheneaum1 = heaD.concat(atheneauM,librarY,fooT).join("\n");

    // Main Page Text

    let atheneaum2 = [
        //"+  Welcome to the ATHENAUM LIBRARY!",
        "+  `eThis script is still under-construction.` ",
        "`eTry again later.`  +",
        "\n",
        "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        ].join("");

    //Creation of Main Page Text; Returns it to caller.
    let atheneaum = atheneaum1 + "\n" + atheneaum2;
    return atheneaum;
}
