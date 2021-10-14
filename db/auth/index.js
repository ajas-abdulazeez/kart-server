
const crud = require("../crud");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()


const signup = async(usertesting)=> {

    console.log(usertesting)
    
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
        console.log("something went wrong checking")
        return {data:"error in adding"}
    }
}



const signin = async(user_data) =>{
    const username = user_data.username
    const user = {name:username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

    try{

        let usercheck = await crud.selectData('users', {
            filteringConditions: [
                ['user_name', '=', username]
                
            ]
        }) 
        
            if (!usercheck.length){
                console.log("no users found");
                return {status:false,
                        data:"no users"};
                        
            }

            else{
            
                if (await bcrypt.compare(user_data.password , usercheck[0].password)){
                    console.log("login success")
                    return{accessToken : accessToken, id:usercheck[0].user_id ,data:"login success"}
                    
                    }
                
                else {
                    console.log("login failed using wrong password!")
                    return {status:false,
                            data:"wrong password"};
                    }
            }
            
            
        }
        catch{
            console.log("somthing went worng")
            return{data:"somthing went wrong"}
            
        }

}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      console.log(user)
      req.user = user
      next()
    })
  }





module.exports ={signup, signin,authenticateToken};





