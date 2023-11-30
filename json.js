// const customers = require('./json/customers.json')
const fs = require('fs')
const path = require('path')

// console.log(customers)

// customers.forEach(customer=>{
//     console.log(customer.name)
// })

const filePath = path.join(__dirname, "json", "customers.json")


// let readDataJson = function (path, cb) {
//     fs.readFile(path, 'utf8',(err,data)=>{
//         if(err){console.log(err); return cb(err, data)}
//         else{
//             try{
//                 jsonData = JSON.parse(data)
//                 return cb(jsonData)
//             }catch(err){
//                 console.log(err)
//                 return cb(err)
//             }
//         }
//     })
// }

// readDataJson(filePath,(data=>{
//     console.log(data)
// }))


let insertNewCustomer = async()=>{

    let cur = JSON.parse(await fs.readFileSync(filePath,'utf8'));

    const newcustomer =     {
                                "id": cur[cur.length -1].id + 1,
                                "name": "Carla Ashraf",
                                "quantity": 1000,
                                "address": "Heliopolis"
                            }

    console.log(cur)
    cur.push(newcustomer)
    let newObj = JSON.stringify(cur,null,2)

    console.log(newObj)
    fs.writeFileSync(filePath, newObj,'utf8')
}

insertNewCustomer()

// process.on('uncaughtException',(err)=>{
//     console.log(err);
// })
