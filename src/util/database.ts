import mongoose from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

const MONGODB_URI = process.env.MONGODB_URI || "";

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(MONGODB_URI);

  connection.isConnected = db.connections[0].readyState;

  console.log("dbConnect", connection.isConnected);
}

export default dbConnect;
