
const crud = require("../crud");



const addproduct = async(add_product) =>{

    let products = await crud.insertData("products", addproduct);
    console.log("product added successfully1")
}



const listproducts = async() =>{

let listofproducts = await crud.selectData('products');
console.log(listofproducts);
return listofproducts;

}


const searchproducts = async(search_input) =>{

    let searchdata = await crud.selectData('products', {
        filteringConditions: [
            ['product_name', 'LIKE', "%"+search_input+"%"]
            
        ]
        
    })
    console.log(searchdata);
    return searchdata;
}


const rateproduct = async(rate_product) =>{

    let rating_product = await crud.insertData("product_rating", rate_product);
    console.log("product rated successfully1")

}

const categories = async() =>{

    let listcategories = await crud.selectData('category');
    console.log(listcategories);
    return listcategories;
    
    }



module.exports ={addproduct, listproducts , searchproducts , rateproduct , categories}