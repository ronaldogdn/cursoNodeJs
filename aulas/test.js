const crypto = require("crypto");
const start = Date.now();

function logHashTime(){
    crypto.pbkdf2("a","b",100000,512,"sha512",() => {
        console.log(`Hash: ${Date.now() - start}`);
    })
}
/**
 * Será chamada o threadPool automáticamente
 * O processo é muito custoso por isso é quebrada em 4 threds
 */
logHashTime();
logHashTime();
logHashTime();
logHashTime();