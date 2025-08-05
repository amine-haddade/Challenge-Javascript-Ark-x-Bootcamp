import { fetchUserData } from "./fetchUserData.js";
import { summarizeAge } from "./summarizeAge.js";

async  function getAllData(){
    try{
        const usersList=await fetchUserData()
        const sommeAge=await summarizeAge()
        console.log("somme age est "+sommeAge)
        console.log("lst users  est "+usersList)
    }catch(err){
        console.log("error"+err)
    }
}

getAllData()