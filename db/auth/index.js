
const crud = require("../crud");
const bcrypt = require('bcrypt');

let usertesting = {
    username:"ajasabdulazeez",
    email:"ajasasraloorkavu@gmal.com",
    phone:9745773603,
    password:"ajas123"
  }

let user ={
    username:"ajasabdulazeez",
    password:"$2b$10$lYIeyl9QpsHOpRfZLnobz.SfcXJ.0VPpGEzEAbx4GG.wDCXkUyX.y"
}




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
    }
    catch{
        console.log("something went wrong")
    }
}



const signin = async(user) =>{

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
                    return {status:true,
                            data:"login success"};
                    }
                
                else {
                    console.log("login failed using wrong password!")
                    return {status:false,
                            data:"wrong password"};
                    }
            }

}


signin(user);

module.exports ={signup, signin};





