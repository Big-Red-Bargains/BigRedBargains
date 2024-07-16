
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

let collection;

// MongoDB connection
async function connectToDatabase() {
  try {
    await client.connect();
    collection = client.db("EduNotes").collection("userData"); // should replace with specific collection
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
const mongoURI = process.env.MONGO_URL
const PORT = process.env.PORT;

const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// routes

app.post('/getItems', cors(), async (req, res) => {
    // need to set collection to the collection containing all items

})

async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer()