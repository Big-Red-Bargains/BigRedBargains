const { v4: uuidv4 } = require('uuid'); const express = require('express');
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
    console.log('Attempting to connect to MongoDB with URI:', mongoURI);
    await client.connect();
    collection = client.db("BigRedBargains").collection("Listings");
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

app.post('/addItem', cors(), async (req, res) => {
  collection = client.db("BigRedBargains").collection("Listings");
  const { seller, name, description, image } = req.body
  const itemId = uuidv4(); // generates unique identifier for item
  // const {id, email, iat} = jwt.verify(token, JWT_SECRET)
  try {
    const itemData = {
      sellerID: seller,
      itemID: itemId,
      name: name,
      description: description,
      image: image
    };
    await collection.insertOne(itemData); // Insert the request payload into the database
    res.json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error("Error accessing endpoint:", error); // Log the error
    res.status(500).json({ error: 'Internal Server Error' }); // Send an error response to the client
  }
})

app.get('/getItems', cors(), async (req,res) => {
  console.log("in get item endpoint")
  collection = client.db("BigRedBargains").collection("Listings");
  const query = {sellerID: "kln47"}
  const cursor = collection.find(query)
  items = []
  await cursor.forEach(doc => {
    temp = []
    temp.push(doc.name);
    temp.push(doc.description);
    temp.push(doc.image)
    items.push(temp)
  });
  console.log(items)
  res.json(items);
})

async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer()