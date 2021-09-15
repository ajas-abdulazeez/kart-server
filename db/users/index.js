const crud = require("../crud");


const update_username = async(data) =>{

let update_user_name = await crud.updateData('users', {
    fields: {
        user_name: data.username
    },
    filteringConditions: [
        ['user_id', '=', data.id]
    ]
    
})
    return{data:"Updated Successfull"}

}


const update_email = async(data) =>{

    let update_email = await crud.updateData('users', {
        fields: {
            email: data.email
        },
        filteringConditions: [
            ['user_id', '=', data.id]
        ]
    })
    return {data:"Updated Successfully"}
    }

const update_phno = async(data) =>{
    let result = await crud.updateData('users',{
        fields:{
            phone_number:data.phone_no
        },
        filteringConditions:[
            ['user_id', '=',data.id]
        ]
    })
    return {data:"Updated Succesfully"}
}

const profile = async(id)=>{
    let user = await crud.selectData('users',{
        filteringConditions:[
            ['user_id',id]
        ]
    })
    const result = {
        username: user[0].user_name,
        phone_no: user[0].phone_number,
        created_date:user[0].created_date,
        email:user[0].email
    }
    return result
}

module.exports={update_username,update_email,profile,update_phno};
