const crud = require("../crud");




crud.selectData('products')
.then(todos => {
    console.log(todos)
})


