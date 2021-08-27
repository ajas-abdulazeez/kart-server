var express = require('express')
var app = express()
const port = 5000;


const pass_word ="hello123"
const user_name ="hello123"






app.use(express.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})




app.post('/api/v1/signin', function (req, res) {  
    
    console.log("okay test success")
    if ("testing" !== user_name || "123" !== pass_word )
    {
        console.log("login failed using : Wrong username or Password")
        response = {  
         message:"login failed"
        };    
    }
    else{
        console.log("login successfull")
        response = {  
            message:"login success"
        }; 
    }
    console.log(response.message)
    res.end(JSON.stringify(response));  

 })  








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })