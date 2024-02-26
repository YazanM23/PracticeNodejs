const value=7
if(value < 10){
    console.log("Small Number");
}
else if (value > 10) {
    console.log("Large Number");
}
console.log("Heres Node!");

const hiMSg=require('./functionModule.js');
const name=require('./difinitionModule.js');

hiMSg(name);
require('./addition.js');
console.log("O.S Module : ");
require('./os-module.js');
require('./path-module.js');
require('./fileSync.js');
require('./fileAsync.js');
