const fs=require('fs')


function ReadFileAsync(pathFile){
    return new Promise((resolve,reject)=>{
        fs.readFile(pathFile,'utf-8',(err,data)=>{
            if(err){
                reject(`Error lors de la lecture du fichier : ${err.message}`)
            }else{
                resolve(data)
            }

        })
    })
}

ReadFileAsync('../Files/.file')

module.exports={ReadFileAsync} // exporter une fonction
