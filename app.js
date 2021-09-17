var express = require('express')
var app = express()
app.use(express.json());
const cors =require("cors");
app.use(cors())
const port = 5000;
const auth = require("./db/auth");
const products = require("./db/products");
const userfunction = require ("./db/users")
const jwt = require('jsonwebtoken')
require('dotenv').config()
var express = require('express');
var Busboy = require('busboy')
// var path = require('path'),
// var fs = require('fs');
 


console.log(userfunction);




app.get('/',auth.authenticateToken, (req,res) => {
res.send('hello world')
})

app.post('/', (req,res) => {
res.send(req.body)
})



app.post('/api/v1/signup', async(req,res) => {
    try {
    const usertesting = req.body
    const result = await auth.signup(usertesting)
    res.send(result)
    }catch{
        res.status(500).send("Somthing went worng")
    }

  })  




app.post('/api/v1/signin', async (req,res) => {
    try{

    const user_data = req.body
    
    const result = await auth.signin(user_data)
    res.send(result)
    
    const userid = []
    userid.push({id:result.id})
    console.log(userid)

    

    
    
    }catch{
        res.status(500).send("API error:Somthing went wrong")
        
    }

 })  


 app.post('/api/v1/upload_form', async(req,res) => {
     const add_product = req.body
     const result = await products.addproduct(add_product)
     
     var busboy = new Busboy({ headers: req.headers });
     busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
 
      var saveTo = path.join(__dirname, 'uploads/' + filename);
      file.pipe(fs.createWriteStream(saveTo));
    });
 
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });
    res.send(result) 
    return req.pipe(busboy);    
     
    })


app.post('/api/v1/searchproducts',auth.authenticateToken, async(req,res) => {
        const data = req.body                         //product_name
        const result = await products.searchproducts(data);
        res.send(result)
    })

app.get('/api/v1/viewproducts/:product_id', async(req,res) => {
        const {product_id} = req.params;                      
        const result = await products.showproducts(product_id);
        res.send(result)
    })
    

app.post('/api/v1/rating_products',auth.authenticateToken, async(req,res) => {
    const data = req.body                                 //rating
    const result = await products.rateproduct(data)
    res.send(result)
    })



app.get('/api/v1/profile',auth.authenticateToken, async(req,res) => {
    const id = userid[0].id
    // console.log(id);
    result = await userfunction.profile(id)
    res.send(result)


})

app.get('/api/v1/sell', (req,res) => {
    
    })

app.get('/api/v1/categories', async(req,res) => {
    const result = await products.categories()
    console.log(result)
    res.send(result)
    })

app.get('/api/v1/mobile', (req,res) => {
        res.send()
        })



app.get('/api/v1/contact_us', (req,res) => {
    res.send()
    })


app.get('/api/v1/featured_products', async (req,res) => {
    const result = await products.listproducts()
    res.send(result)

})

app.get('/api/v1/recently_added_products', (req,res) => {
res.send()
})

app.get('/api/v1/location', (req,res) => {
    res.send()
    })

app.get('/api/v1/chat_list', (req,res) => {
    res.send()
    })

app.get('/api/v1/chatbox', (req,res) => {
    res.send()
    })


app.post('/api/v1/update_username',auth.authenticateToken, async(req,res) => {
    const data  = {username: req.body.username, id:userid[0].id}    // New username
    const result = await userfunction.update_username(data);
    res.send(result)
    })

app.post('/api/v1/update_emailid',auth.authenticateToken, async(req,res) => {
    const data = {email:req.body.email, id:userid[0].id}                                              //id & New email
    const result = await userfunction.update_email(data);
    res.send(result)                                                             
    })

app.post('/api/v1/update_phone',auth.authenticateToken, async(req,res) => {
    const data = {phone_no:req.body.phone_no, id:userid[0].id}                                                 //id & phone_no
    const result = await userfunction.update_phno(data)
    res.send(result)
    })

app.post('/api/v1/buy_now', (req,res) => {
    res.send()
    })




    app.get('/api/v1/clothing', (req,res) => {
        res.send()
        })
    
    app.get('/api/v1/cars', (req,res) => {
        res.send()
        })
    
    app.get('/api/v1/food', (req,res) => {
        res.send()
        })



app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

//signin signup otp productlist forgetpsswrd individualprdtdetails 

//github testihg