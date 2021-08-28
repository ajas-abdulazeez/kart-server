
var db = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'kart_db'
    }
  });
 
  

const insertData = (tableName, data) => {

    return db(tableName)
            .insert(data)
            .then(resp => resp)
            .finally(() => db.destroy());
}



const selectData = (tableName, options = { fields: [], filteringConditions: [] }) => {

    const { fields, filteringConditions } = options

    return db(tableName)
            .select(fields)
            .where(builder => {
                filteringConditions.forEach(condition => {
                    builder.where(...condition)
                });

            })
            .then(data => data)
            .finally(() => db.destroy());
}





const updateData = (tableName, options = { fields: {}, filteringConditions: [] }) => {

    const { fields, filteringConditions } = options

    return db(tableName)
            .where(builder => {
                filteringConditions.forEach(condition => {
                    builder.where(...condition)
                });

            })
            .update(fields)
            .then(data => data)
            .finally(() => db.destroy());
}


const deleteData = (tableName, options = { filteringConditions: [] }) => {

    const { filteringConditions } = options

    return db(tableName)
            .where(builder => {
                filteringConditions.forEach(condition => {
                    builder.where(...condition)
                });

            })
            .del()
            .then(data => data)
            .finally(() => db.destroy());
}


module.exports={insertData ,updateData , selectData, deleteData};






/*updateData('users', {
    fields: {
        user_name: 'Updated'
    },
    filteringConditions: [
        ['user_id', '=', 11]
    ]
})
.then(updateData => {
    console.log(updateData)
})



selectData('todos')
.then(todos => {
    console.log(todos)
})



selectData('todos', {
    filteringConditions: [
        ['id', '!=', 37],
        ['description', 'LIKE', '%123%']
    ]
})
.then(todos => {
    console.log(todos)
})


deleteData('todos', {
    filteringConditions: [
        ['id', '=', 38]
    ]
})
.then(deleteData => {
    console.log(deleteData)
})


*/