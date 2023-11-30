const fs =require('fs');
const path = require('path');

let filePath = path.join(__dirname, `text-files`, `asyncFile.txt`)

console.log(filePath)



let writeFile = async()=>{
    const file = await fs.writeFileSync(filePath, "file read successfully!!", 'utf8')
} 


async function readfile(file) {
    
    fs.readFile(file, 'utf8',(err,data)=>{
        if(err){throw err}
        console.log(data)
    })
}

let appendToFile = async function(){
    const append = await fs.appendFileSync(filePath, "\n this is a new line!! ",'utf8')
}

let renameFile = function () {
    fs.rename(filePath, path.join(__dirname, "text-files","asyncFileRenamed.txt"),(err)=>{console.log(err)})
    console.log(filePath)
}

let deleteFile = function(){
    fs.unlink(path.join(__dirname, "text-files","asyncFileRenamed.txt"),()=>{
        console.log("old file removed !")
    })
}

writeFile()
    .then(appendToFile())
        .then(appendToFile())
            .then(readfile(filePath))
                .then(renameFile())
                    // .then(deleteFile())
                        .catch(err=>{console.log(err)})



async function asynxFiles() {
    const synFilePath         = (path.join(__dirname, `text-files`, "syncTextFile.txt"))
    const renamedSynFilePath  = (path.join(__dirname, `text-files`, "syncTextFileRenamed.txt"))
    try {
        await fs.writeFileSync(synFilePath, "this is the syncrounous text data !! ",'utf8')
        await fs.appendFileSync(synFilePath, "\n\n this is a new line !!",'utf8')
        await fs.renameSync(synFilePath, renamedSynFilePath)
        const fileData = await fs.readFileSync(renamedSynFilePath,'utf8')
        console.log(fileData)
        // await fs.unlinkSync(renamedSynFilePath)
    } catch (error) {
        console.log(error)
    }
    
}; asynxFiles()
     

// CREATING FOLDERS ===========================================================================================================


if(!fs.existsSync(`./newDirectory`)){
    fs.mkdir(`./newDirectory`,(err)=>{console.log(err)})
    console.log("directory Created !")
}

if(fs.existsSync(`./newDirectory`)){
    fs.rmdir(`./newDirectory`,(err)=>{console.log(err)})
    console.log("directory removed !")
}


// CREATING FOLDERS ===========================================================================================================


// process.on(`uncaughtException`, (error)=>{
//     console.log(error)
//     process.exit(1)
// })