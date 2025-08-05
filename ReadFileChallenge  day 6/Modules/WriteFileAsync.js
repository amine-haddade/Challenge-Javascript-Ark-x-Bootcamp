const fs=require('fs')

async  function WriteFile(path,text){
    try{
        fs.appendFile(path,text,(err)=>{
            if(err){
                console.log(`'l'op;eration de ajouter une ligne dans le fichoer ne pas fonctione ? ${err.message}`);
            }
            else{
                console.log("ligne ajoutée avec succés !")
            }
        })
    }catch(err){
        console.log("++++++"+err)
    }
}

module.exports={WriteFile}