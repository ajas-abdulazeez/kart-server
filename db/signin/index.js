const crud = require("../crud");

const username ="akash";
const password ="testing";


crud.selectData('users', {
    filteringConditions: [
        ['user_name', '=', username],
        ['password', '=', password]
    ]
    
})
.then(todos => {
    console.log(todos);
    const myJSON = JSON.stringify(todos);
    console.log(myJSON);

    if (myJSON =="[]"  ){
        console.log("login failed")
    }
    else{
        console.log("login success")
    }
    
})



