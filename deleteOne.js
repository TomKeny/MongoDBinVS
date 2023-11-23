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
async function deleteOne() {
  try {
    const myDB = client.db('Vehicles');
    const myColl = myDB.collection('Cars');
    const query = { Model: "Tenor" };
        const result = await myColl.deleteOne(query);
        if (result.deletedCount === 1) {
          console.log("Successfully deleted one document.");
        } else {
          console.log("No documents matched the query. Deleted 0 documents.");
        }
      } finally {
        await client.close();
      }
    }
createConnection();
deleteOne().catch(console.dir);
