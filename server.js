// Run server: npm run serve
// Run app: npm run
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const { MongoClient } = require("mongodb");
const { cache } = require("ejs");
const admin = {
  name: "Dmytro",
  password: "d3e4m5a2",
  foldername: "nodeDB",
};
const client = new MongoClient(
  `mongodb+srv://${admin.name}:${admin.password}@cluster0.rvkcx.mongodb.net/${admin.foldername}?retryWrites=true&w=majority`
);
/*  //connect to Mongo DB
const db="mongodb+srv://Dmytro:d3e4m5a2@cluster0.rvkcx.mongodb.net/nodeDB?retryWrites=true&w=majority"; 

//connect to Mongo DB
mongoose.connect(db).then((res)=>console.log("Connected to DB"));
 */
//const __dirname=path.resolve();
app.listen(3000, () => console.log(`Server Started. PORT: ${PORT}`));

app.get("/", (req, res) => {
  res.send("Hello. Server is Good!");
});

const docs = [
  { name: "cake", healthy: false },
  { name: "lettuce", healthy: true },
  { name: "donut", healthy: false },
];
const startDb = async () => {
  try {
    await client.connect();
    console.log("Connected to DB");
    //client.db().createCollection("Test for Many");
    const users = client.db().collection("Test for Many");
    //const result = await users.insertMany(docs);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
//startDb();
