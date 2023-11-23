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
async function updateOne() {
    try {
      const myDB = client.db('Vehicles');
      const myColl = myDB.collection('Cars');
            const filter = { Model: "Picanto" };    
            const options = { upsert: true };
           const updateDoc = { 
        $set: { Version: 'CDXi'},
      };
      const result = await myColl.updateOne(filter, updateDoc, options);
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
    } finally {
      await client.close();
    }
  }
createConnection();
updateOne().catch(console.dir);
