const buffer = require('buffer').Buffer;

const buf = buffer.from('ronaldo gomes');
console.log(buf.toString());
const buf_string = buffer.from('ronaldo gomes','utf-8');
console.log(buf_string.toString());
console.log(buf_string.toString('utf-8',0,7));


