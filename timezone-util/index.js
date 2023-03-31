const moment = require('moment-timezone');

moment.tz.setDefault('Asia/Kolkata');

let targetTimeZone;

// process.argv :- 
// 1) which node (path) 
// 2) which index.js (path of index.js file)
// 3) argument entered.

if(process.argv.length != 3){
    // argument not entered (length of process.argv will be most likely 2)

    console.log("Usage: node <script-file> <timezone>");

    // stop processing

    process.exit(1);
}
else{
    // single argument is passed
    
    targetTimeZone = process.argv[2];
}

console.log(`The time at the ${targetTimeZone} timezone is ${moment().tz(targetTimeZone).format()}`);

// node index.js "Asia/Kolkata" or node index.js "Europe/Paris" or node index.js "America/Los_Angeles" or node index.js "<Target-Time-Zone>"