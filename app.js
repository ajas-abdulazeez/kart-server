var express = require('express')
var app = express()
app.use(express.json());
const port = 5000;
const auth = require("./db/auth");
const products = require("./db/products");
const userfunction = require ("./db/users")


console.log(userfunction);




app.get('/', (req,res) => {
res.send('hello world')
})

app.post('/', (req,res) => {
res.send(req.body)
})



app.post('/api/v1/signup', (req,res) => {
    console.log(req.body);  
    
    try{

        let user = {
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password
          }

        auth.signup(user);
        response = {  
            message:"Account created successfully"
            }; 
        res.end(JSON.stringify(response));
        }
    catch{
            res.status(500).send();
        }
   
  })  




app.post('/api/v1/signin', async (req,res) => {
    
    try{
        let user ={
            username:req.body.username,
            password:req.body.password
            }
        auth.signin(user);
        console.log(response.message)
        res.end(JSON.stringify(response));  
    }
    catch{
        res.status(500).send();
        }

 })  


 app.post('/api/v1/upload_form', (req,res) => {
    
    var add_product = {
        user_id: "3",
        product_name: "samsung",
        seller_name: "32EFD34",
        price:"123",
        quantity: "12",
        product_description: "hello this is a product",
        category:"nothing ",
        product_images:"123" //here json is needed
    };
    products.addproduct(add_product);
    res.send()

    })


app.get('/api/v1/searchproducts', (req,res) => {
        console.log("searching !!!");
        products.searchproducts(req.body.value);
        res.send()
    })
    

app.post('/api/v1/rating_products', (req,res) => {
        products.rateproduct(req.body.data);
        console.log("rating successfully added!");
        res.send()
    })



app.get('/api/v1/profile', (req,res) => {
res.send(user)
})

app.get('/api/v1/sell', (req,res) => {
    res.send("Item Removed")
    })

app.get('/api/v1/categories', (req,res) => {
    
    res.send(products.categories())
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


app.post('/api/v1/update_username', (req,res) => {
    userfunction.update_username(req.body);
    res.send()
    })

app.post('/api/v1/update_emailid', (req,res) => {
    userfunction.update_email(req.body);
    res.send()
    })

app.post('/api/v1/update_phone', (req,res) => {
    res.send()
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