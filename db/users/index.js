const crud = require("../crud");

user={
    username:"sukumarakurupp",
    id:"27"
}

const update_username = async(_input) =>{

let update_user_name = await crud.updateData('users', {
    fields: {
        user_name: _input.username
    },
    filteringConditions: [
        ['user_id', '=', _input.id]
    ]
})
.then(update_user_name => {
    console.log(update_user_name)
    console.log("updated successfully");
})
}


const update_email = async(_input) =>{

    let update_email = await crud.updateData('users', {
        fields: {
            email: _input.email
        },
        filteringConditions: [
            ['user_id', '=', _input.id]
        ]
    })
    .then(update_user_email => {
        console.log(update_user_email)
        console.log("updated email successfully");
    })
    }

module.exports={update_username,update_email};
