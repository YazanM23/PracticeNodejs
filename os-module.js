const os=require('os');
console.log("User information : ");
console.log(os.userInfo());
const information={
    name : os.type(),
    release: os.release(),
     totalMem: os.totalmem() ,
     freeMem: os. freemem(),
     uptime : os.uptime(),

}
console.log("ALl informations : ");
console.log(information);