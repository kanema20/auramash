import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { kols?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGODB_URI!);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const kolCollection: mongoDB.Collection = db.collection(process.env.KOL_COLLECTION_NAME!);
 
    collections.kols = kolCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${kolCollection.collectionName}`);
 }