const crud = require("../crud");

const username ="sushil";
const password ="32EFD34w";


crud.selectData('users', {
    filteringConditions: [
        ['user_name', '=', username],
        ['password', '=', password]
    ]
})
.then(out => {
    console.log("login success");
})



