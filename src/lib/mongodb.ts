import { MongoClient } from "mongodb";

const uri = import.meta.env.MONGODB_URI;

if (!uri) {
  throw new Error(`Variable de entorno inválida: ${uri}`);
}

const options = {};
let cachedMongo;

const connectToDB = async () => {
  const mongo = await new MongoClient(uri, options).connect();
  return mongo.db(import.meta.env.MONGODB_NAME);
};