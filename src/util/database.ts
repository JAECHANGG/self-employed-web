import { MongoClient } from "mongodb";

let connectDB: any;
let globalWithMongo = global as typeof globalThis & {
  mongoClient: MongoClient;
};
const MONGODB_URI = process.env.MONGODB_URI as string;

async function setMongoConnect() {
  if (process.env.NODE_ENV === "development") {
    if (!globalWithMongo.mongoClient) {
      globalWithMongo.mongoClient = await new MongoClient(
        MONGODB_URI
      ).connect();
    }
    connectDB = globalWithMongo.mongoClient;
  } else {
    connectDB = await new MongoClient(MONGODB_URI).connect();
  }
}

setMongoConnect();

export { connectDB };
