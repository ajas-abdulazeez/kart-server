
const crud = require("../crud");

var usertesting = {
    user_name: "akash",
    phone_number: "9745773603",
    password: "testing"
};

crud.insertData("users",usertesting);