
const crud = require("../crud");
const bcrypt = require('bcrypt');






const signup = async(usertesting)=> {
    try {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(usertesting.password, salt);
        
        let adduser = {
            user_name:usertesting.username,
            email:usertesting.email,
            phone_number:usertesting.phone,
            password:hashedpassword
          }

        let result = await crud.insertData("users",adduser);
        console.log(result)
        return {data:"User added Successfully"}
    }
    catch{
        console.log("something went wrong")
    }
}



const signin = async(user) =>{

    try{

        let usercheck = await crud.selectData('users', {
            filteringConditions: [
                ['user_name', '=', user.username]
                
            ]
            
        })
            if (!usercheck.length){
                console.log("no users found");
                return {status:false,
                        data:"no users"};
            }

            else{
            
                if (await bcrypt.compare(user.password , usercheck[0].password)){
                    console.log("login success")
                    return {data:"login success"};
                    }
                
                else {
                    console.log("login failed using wrong password!")
                    return {status:false,
                            data:"wrong password"};
                    }
            }
        }catch{
            console.log("somthing went worng")
            return{data:"somthing went wrong"}
            
        }

}




module.exports ={signup, signin};





