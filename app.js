var express = require('express')
var app = express()
app.use(express.json());
const port = 5000;



const user = {
    username:"Akash",
    password:"12345",
    email_id:"abcd@gmail.com"
}

const categories = {
    
}



app.get('/', (req,res) => {
res.send('hello world')
})

app.post('/', (req,res) => {
res.send(req.body)
})

app.post('/api/v1/signup', (req,res) => {
res.send(req.body)
})

app.post('/api/v1/signin', (req,res) => {
    
if(user.username === req.body.username && user.password === req.body.password){
    res.send('Login sucess')
    
    return;  
  }
  
    res.send('Login Failed')
    
})

app.get('/api/v1/profile', (req,res) => {
res.send(user)
})

app.get('/api/v1/sell', (req,res) => {
    res.send("Item Removed")
    })

app.get('/api/v1/categories', (req,res) => {
    res.send()
    })

app.get('/api/v1/mobile', (req,res) => {
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

app.get('/api/v1/contact_us', (req,res) => {
    res.send()
    })

app.get('/api/v1/recent_product', (req,res) => {
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

app.post('/api/v1/upload_form', (req,res) => {
    res.send()
    })

app.post('/api/v1/update_username', (req,res) => {
    res.send()
    })

app.post('/api/v1/update_emailid', (req,res) => {
    res.send()
    })

app.post('/api/v1/update_phone', (req,res) => {
    res.send()
    })

app.post('/api/v1/buy_now', (req,res) => {
    res.send()
    })

app.get('/api/v1/soldby', (req,res) => {
    res.send()
    })

app.get('/api/v1/product_discripition', (req,res) => {
    res.send()
    })

app.get('/api/v1/product_quantity', (req,res) => {
    res.send()
    })

app.get('/api/v1/product_features', (req,res) => {
    res.send()
    })

app.get('/api/v1/product_ratting', (req,res) => {
    res.send()
    })

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})