import { fetchUserData } from "./fetchUserData.js";

async  function summarizeAge(){
    try{
        const users=await fetchUserData();
        const  sum=users.reduce((acc,ele)=>  acc+ele.age ,0)
        return sum
    }catch(err){
        console.log("erreur lors que claculer la somme des ages de tus les users "+err)
    }
}

export {summarizeAge}