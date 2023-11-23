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

async function insertOne() {
    try {
        const myDB = client.db('Vehicles');
        const myColl = myDB.collection('Cars');

        const doc = {Model: 'Soprano', Version: 'GTXi', Fuel: ['Hybrid', 'Electric'], Colours: ['Red', 'Silver', 'Black', 'Metallic Blue'], Stock: 6 };
        const result = await myColl.insertOne(doc);
    
        console.log(`A document was inserted with the _id: ${result.insertedId}`,);
        }
        finally {           // Ensures that the client will close when you finish/error
            
            await client.close();
                }   
}
createConnection();
insertOne().catch(console.dir);
