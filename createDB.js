const { MongoClient } = require('mongodb');
//or as an es module:
//nodeimport { MongoClient } from 'mongodb'
var data = require("./data.js").data;
console.log(data)
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database Name
const dbName = 'Moto';
async function main() {
// Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('motos');
    // the following code examples can be pasted here...
    const insertResult = await collection.insertMany([{ a: 1 }, { a:2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
    return 'done.';
}
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
