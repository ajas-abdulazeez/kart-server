
const crud = require("../crud");



const addproduct = async(add_product) =>{

    let products = await crud.insertData("products", addproduct);
    console.log("product added successfully1")
}



const recentproducts = async() =>{

let recentproducts = await crud.selectData('products')
.then(products => {
    console.log(products)
})

return products;

}

module.exports ={addproduct, recentproducts}