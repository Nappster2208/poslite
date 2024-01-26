import mongoose from "mongoose";

let mongoClient;
const connect = async () => {
  try {
    if (mongoClient) {
      return mongoClient;
    }
    mongoClient = await mongoose.connect(process.env.MONGODB_URI);
    return { mongoClient };
  } catch (error) {
    throw new Error("Connection Failed");
  }
};

export default connect;
