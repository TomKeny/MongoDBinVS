const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://username:password@cluster0.grpledo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function createConnection() {
    try {
      await client.connect();
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
}
async function simpleQuery() {
    try {
        const myDB = client.db('Vehicles');
        const myColl = myDB.collection('Cars');
        
        const query = { Colours:  'White' };  //condition for a document to be returned
        const options = {
          sort: { Model: 1 },   // sort returned documents in ascending order by Model (A->Z)
          projection: { _id: 0, Model: 1, Version: 1 },   // Include only the `Model` and `version` fields in each returned document
        };
        const foundDocs = myColl.find(query, options); //run the query and store results in foundDocs
  
        if ((await myColl.countDocuments(query)) === 0) {     
          console.log("No documents found!");
        }
        for await (const doc of foundDocs) {
          console.dir(doc);
        }
      } finally {
        await client.close();
      }
    }
createConnection();
simpleQuery().catch(console.dir);
