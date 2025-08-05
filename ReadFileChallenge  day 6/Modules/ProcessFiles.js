const fs=require('fs')

async  function processFiles(pathsList,text){
    try{
        pathsList.forEach(element => {    
            fs.appendFile(element,text,(err)=>{
                if(err){
                    console.log(`l'op;eration de ajouter une ligne dans le fichoer ne pas fonctione ? ${err.message}`);
                }
                else{
                    console.log("ligne ajoutée avec succés !")
                }
            })
        });
    }catch(err){
        console.log("++++++"+err)
    }
}

module.exports={processFiles}