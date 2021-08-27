
const crud = require("../crud");

var usertesting = {
    user_name: "sushilpeter",
    phone_number: "9745773603",
    password: "32EFD34"
};

crud.insertData("users",usertesting);