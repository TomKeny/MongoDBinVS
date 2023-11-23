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
async function insertMany() {
    try {
        const myDB = client.db('Vehicles');
        const myColl = myDB.collection('Cars');
        const docs = [
            {Model: 'Alto', Version: 'CXi', Fuel: ['Hybrid', 'Electric'], Colours: ['Bronze', 'Silver', 'Black', 'Metallic Blue'], Stock: 4 },
            {Model: 'Tenor', Version: 'CX', Fuel: ['Hybrid', 'Electric'], Colours: ['Bronze', 'White', 'Black', 'Metallic Red'], Stock: 8 },
             ];
        const result = await myColl.insertMany(docs);
        console.log(`${result.insertedCount} documents were inserted`);
     } finally {
        await client.close();
      }
}
createConnection();
insertMany().catch(console.dir);
