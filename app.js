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
var upload = require ('express-fileupload')
app.use(upload());
const crypto = require('crypto');
app.use(express.static("uploads"))

 







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
     let fileNames=[]
    
     Object.entries(req.files).forEach(element => {
         console.log(element)
         let randomValue = crypto.randomUUID()
         fileNames.push(randomValue +".jpg")

         req.files[element[0]].mv("./uploads/"+randomValue+".jpg").then((error)=>{
               console.log(error)})
     });
  
     add_product.product_images = JSON.stringify(fileNames);
    const result = await products.addproduct(add_product)
    res.send(result) 
    
    })

 
app.post('/api/v1/searchproducts',auth.authenticateToken, async(req,res) => {
        const data = req.body                         //product_name
        const result = await products.searchproducts(data);
        res.send(result)
    })


    
app.get('/api/v1/viewproducts/:product_id', async(req,res) => {
        const {product_id} = req.params; 

        const result = await products.showproducts(product_id);
        const rating = await products.getRating(product_id)
        res.send({...result,rating})
        
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


app.get('/api/v1/related_products/:id', async (req,res) => {
    const {id} = req.params;
    const result = await products.showproducts(id)

    const relatedProductList = await products.relatedproducts(result.category, id);
    res.send(relatedProductList)
    

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
    const data  = {username: req.body.username, id:userid[0].id} 
    const result = await userfunction.update_username(data);
    res.send(result)
    })

app.post('/api/v1/update_emailid',auth.authenticateToken, async(req,res) => {
    const data = {email:req.body.email, id:userid[0].id}                                      
    const result = await userfunction.update_email(data);
    res.send(result)                                                             
    })

app.post('/api/v1/update_phone',auth.authenticateToken, async(req,res) => {
    const data = {phone_no:req.body.phone_no, id:userid[0].id}      
    const result = await userfunction.update_phno(data)
    res.send(result)
    })

app.post('/api/v1/buy_now', (req,res) => {
    res.send()
    })




app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})


