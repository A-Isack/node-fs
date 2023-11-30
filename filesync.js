const fs = require(`fs`)

const rs = fs.createReadStream("./text-files/lorem.txt",'utf8');
const ws = fs.createWriteStream("./text-files/new-lorem.txt",'utf8');


// rs.on('data',(data)=>{
//     console.log(data)
// })


rs.pipe(ws)