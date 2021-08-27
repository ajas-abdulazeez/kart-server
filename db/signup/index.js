
import {insertData } from '../crud.js';

var usertesting = {
    user_name: "sushil",
    phone_number: "9745773603",
    password: "32EFD34"
};

insertData("users",usertesting);