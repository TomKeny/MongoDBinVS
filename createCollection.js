const {MongoClient} = require("mongodb")

const uri = "mongodb+srv://username:password@cluster0.grpledo.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)
async function createConnection() {
    try {
        await client.connect();
        console.log("Connected to the database")
    } catch (error) {
        console.error("Error connecting to the database:",error)
    }
}
async function createCollection () {
    try{
        const db =client.db("Vehicles")
        await db.createCollection("Trucks")
        console.log("Created collection: Trucks")
    } catch (error) {
        console.error("Error creating collection:",error)
    } finally {
        client.close()
    }
}
createConnection()
createCollection()
