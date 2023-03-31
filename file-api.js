let fs = require('fs');

// fs.writeFileSync('out.txt', 'This should get written to \"out.txt\" file Synchronously');

// console.log("Print this to console after the previous line");

fs.writeFile('out.txt', 'This should get written to \"out.txt\" file Asynchronously', (err) => {
    console.log('This is printed after the \"out.txt\" file is written Asynchronously');
});

console.log("Print this to console after the previous line");

// to make Aynchronous CallBack function, execute something immediately after it executes its original process.
let myLoggerAPI = function(logMessage, callBack) {
    fs.writeFile('out.log', logMessage, callBack);
}

myLoggerAPI('Log this', (err) => {
    if(err){
        // do something to handle error in "Log this" execution.
    }
    
    updateLogMetrics();  // if you want to update the logs you just wrote.
});

// next line, is not delayed.