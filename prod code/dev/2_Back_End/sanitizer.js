function (context, args) {

   //sanitizer.js - Part of the 'Athenaeum Library' Project; By: meta
	//Purpose: User script input sanitizer. Used to: 
	//  * Analyize and isolate potential malicious malformed input 
	//  * Scrub input of malicious input discreetly
	//  * Provide generic and discreet error returns
    //  * Keep error checking process light, not bogging down script return time

    // [0, 1, 2, 3] ->
    //  [3] = Potential threat to a database detected;
    //  [2] = Potential threat to authenication detected;
    //  [1] = Potential threat to payment process detected;
    //  [0] = No threats detected in input;

    // Steps of Operation:
        // 1) Count the top level variables
        // 2) Based on a list of commonly known threat input, flag script input
        // 3) After evaluating input (only processes input that is not undefined or null), it assesses the run risk
            // The run risk will be flagged as threat levels noted above. The three threats [3, 2, 1] correlate to [CRT,HGH,MED], while [0] correlates to [LOW]
        // 4) If the run risk is flagged as [2] or [1], the suspicious input may be sanitized or blocked, depending on decided severity. If the run risk is flagged as [3], the input will always be blocked, and generic error messages given that coincide with [2] and [1] to confuse potential threat actors.
        // 5) A new input object is then created and passed out to the "desk" script.

    // NOTE: This script is designed to work with Page Input Navigation (PIN) Format created by MDynix, and cannot be garenteed to work otherwise. Please contact MDynix for more information.
    
// DEV START
    // Start of by checking whether input is undefined (non-existant) or null (an empty object).
        // If input is either undefined or null, immediately call arg creation function with threat level as [00].
        // If input is anything else, start testing for the three run risk levels.
            // If the sum of the three run risk values equal 3 or more, input is deemed too risky to run. The arg creation function is called with the threat of CRT, with the content set to a generic error message.
            // If the value is 1 or 2, input must be santized before it's safe to run. The arg creation function is called with the threat of MEDIUM or HIGH, respectively, with the content set to an edited version of the source args.
            // If the value is 0, input is safe to run. The arg creation function is called with the threat of LOW, with the content set to the original source args.
    // When arg creation function is called, it recreates the object (which can only be a one level pass) with the santizing values inputted from analyize function.
        // If it recieves a value of 3 or more, it simply returns out an object with an error input page request.
        // If it recieves the value of 0, it sets the santized version to the original with no changes.
        // If it recieves the value of either 1 or 2, it scans the santizing values object and expects to see a list of correlating sub-objects to replace the originals with, and runs replacement.

    // Returns out the sanitized args object out to caller.
    

}