var express = require('express')
var app = express()
app.use(express.json());
const port = 5000;
const auth = require("./db/auth");
const products = require("./db/products");
const userfunction = require ("./db/users")
const jwt = require('jsonwebtoken')
require('dotenv').config()


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

    const user = req.body
    
    const result = await auth.signin(user)
    res.send(result)
    
    
    }catch{
        res.status(500).send("Somthing went worng")
        
    }

 })  


 app.post('/api/v1/upload_form', async(req,res) => {
     const add_product = req.body
     const result = await products.addproduct(add_product)
     res.send(result)
    
    // var add_product = {
        // user_id: "3",
        // product_name: "samsung",
        // seller_name: "32EFD34",
        // price:"123",
        // quantity: "12",
        // product_description: "hello this is a product",
        // category:"nothing ",
        // product_images:"123" //here json is needed
    // };
    // products.addproduct(add_product);
    // res.send()

    })


app.get('/api/v1/searchproducts',auth.authenticateToken, async(req,res) => {
        const data = req.body                         //product_name
        const result = await products.searchproducts(data);
        res.send(result)
    })
    

app.post('/api/v1/rating_products',auth.authenticateToken, async(req,res) => {
    const data = req.body                                 //rating
    const result = await products.rateproduct(data)
    res.send(result)
    })



app.get('/api/v1/profile',auth.authenticateToken, async(req,res) => {
    const id = req.body.user_id
    result = await userfunction.profile(id)
    res.send(result)

})

app.get('/api/v1/sell', (req,res) => {
    
    })

app.get('/api/v1/categories',auth.authenticateToken, async(req,res) => {
    const result = await products.categories()
    res.send(result)
    })

app.get('/api/v1/mobile', (req,res) => {
        res.send()
        })



app.get('/api/v1/contact_us', (req,res) => {
    res.send()
    })


app.get('/api/v1/featured_products', (req,res) => {
res.send()
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
    const data = req.body                                                  //id & New username
    const result = await userfunction.update_username(data);
    res.send(result)
    })

app.post('/api/v1/update_emailid',auth.authenticateToken, async(req,res) => {
    const data = req.body                                                 //id & New email
    const result = await userfunction.update_email(data);
    res.send(result)                                                             
    })

app.post('/api/v1/update_phone',auth.authenticateToken, async(req,res) => {
    const data = req.body                                                  //id & phone_no
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