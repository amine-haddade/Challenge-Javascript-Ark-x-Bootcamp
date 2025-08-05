import { fetchUserData } from "./fetchUserData.js";

async  function FormateUsers(){
    try{
        const users=await fetchUserData();
        const newFormat=users.map((ele)=>{
            return `Name : ${ele.firstName} ,Age : ${ele.age}`
        })

        console.log(newFormat)

    }catch(err){
        console.log("erreure lors de format users"+err)
    }
}

FormateUsers()