const { MongoClient } = require('mongodb')

let dbConnection
let uri = "mongodb+srv://vasil:test123@cluster0.gx8vpzc.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}