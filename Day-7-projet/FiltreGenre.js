import { fetchUserData } from "./fetchUserData.js"
async function MaleUsers(){
    try{
        const AllUsers=await fetchUserData()
        const maleUsers=AllUsers.filter((ele)=>ele.gender==="male")
        console.log(maleUsers)
    }catch(err){
        console.log('user filtre data errreur'+err)
    }
}

MaleUsers()

export {MaleUsers}