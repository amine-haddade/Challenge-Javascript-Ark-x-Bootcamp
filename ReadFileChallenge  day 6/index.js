const {ReadFileAsync}=require('./Modules/ReadFileAsync')// mon module  qui lire les files 
const {WriteFile}=require('./Modules/WriteFileAsync')// mon module  qui lire les files 
const {processFiles}=require('./Modules/ProcessFiles')// mon module  qui lires plisieures  fichies 

// functionnde lire le content e file
async function start(){
    try{
        const content=await ReadFileAsync('./Files/File.txt')
        console.log(content)
    }catch(err){
        console.log(err)
    }
}
// appele function de Ajouter une content
async function AddFile(){
    try{
        const result=await WriteFile('./Files/File.txt','hhhhhhhhhh ')
        console.log("la resultat de aouter ligne :"+result)
    }catch(err){
        console.log(err)
    }
}
// appel de la fonction de process files
async function LiresFiles(){
    try{
     await processFiles(['./Files/File.txt','./Files/Frile.txt'],"++++++++++++++++++")
    }catch(err){
        console.log(err)
    }
}


// AddFile()
// start()
LiresFiles()



