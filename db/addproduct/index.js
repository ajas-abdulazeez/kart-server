
const crud = require("../crud");

var addproduct = {
    user_id: "3",
    product_name: "samsung",
    seller_name: "32EFD34",
    price:"123",
    quantity: "12",
    product_description: "hello this is a product",
    category:"nothing ",
    product_images:"123" //here json is needed
};


crud.insertData("products", addproduct);