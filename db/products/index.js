
const crud = require("../crud");



const addproduct = async(add_product) =>{

    productData={
        product_name: add_product.product_name,
        price:add_product.price,
        quantity:add_product.quantity,
        category:add_product.category,
        product_description:add_product.product_description,
        product_images:add_product.product_images
    }

    let products = await crud.insertData("products", productData);
    console.log("product added successfully1")
    return{data:"Added Successfully"}
}



const listproducts = async() =>{

let listofproducts = await crud.selectSortedData('products' , {sortingcondition:['product_id','desc'],fields: [], filteringConditions: []});
return listofproducts;
}


const searchproducts = async(data) =>{
    try{

       let searchdata = await crud.selectData('products', {
           filteringConditions: [
               ['product_name', 'LIKE', "%"+data.product_name+"%"]
            
           ]
       })
       // console.log(searchdata);
       return searchdata;
    }catch{
        return{data:"Somthing went worng"}
    }
}


const showproducts = async(prodcut_id) =>{
    try{

       let product = await crud.selectData('products', {
           filteringConditions: [
               ['product_id', '=', prodcut_id]]
       })
       if (product.length){
        return product[0];
       }
       return {}
       
    }catch{
        
        return{data:"product not found"}
    }
}



const rateproduct = async(data) =>{

    let rating_product = await crud.insertData("product_rating", data);
    return{data:"Product rated successfully"}

}

const categories = async() =>{
    let listcategories = await crud.selectData('category');
    return listcategories;
    }


const delete_product = async(data) =>{
    const result = await crud.deleteData('products',{
        filteringConditions:[
            ['product_id',data]
        ]
    })
    return{data:"Deleted Successfully"}
}



module.exports ={addproduct, listproducts , showproducts, searchproducts , rateproduct , categories,delete_product}