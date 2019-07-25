const express = require("express")  ;
const path = require( "path");
const mongoose = require("mongoose") ;
const bodyParser = require("body-parser") ;
const dotenv = require("dotenv");
const Promise = require("bluebird") ;


const auth = require("./routes/auth") ;
const users = require("./routes/users") ;
const books = require( "./routes/books");

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect("mongodb://max:bAOPjXFKbR9Fy3V9@cluster0-shard-00-00-49t5g.mongodb.net:27017,cluster0-shard-00-01-49t5g.mongodb.net:27017,cluster0-shard-00-02-49t5g.mongodb.net:27017/bookapi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", { useMongoClient: true });

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/books", books);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("Running on localhost:8080"));
