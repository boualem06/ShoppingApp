const express = require('express')
const { default: mongoose } = require('mongoose')
const UserRoutes = require("./routes/UserRoutes") ;
const Image=require('./routes/Image') ;
const ProductRoutes=require('./routes/ProductRoutes')
const app = express()
const cors = require("cors");
require("dotenv").config();

const port = 5000
// const dbURI = "mongodb+srv://Boualem:boualemhamroune1649@blogs.xwwjje4.mongodb.net/?retryWrites=true&w=majority"
const dbURI="mongodb://boualem:boualemhamroune1649@ac-xpedaaa-shard-00-00.ezy4oyt.mongodb.net:27017,ac-xpedaaa-shard-00-01.ezy4oyt.mongodb.net:27017,ac-xpedaaa-shard-00-02.ezy4oyt.mongodb.net:27017/?ssl=true&replicaSet=atlas-hwu6ui-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { console.log("connected to db"); app.listen(port); })
  .catch((err) => { console.log(err) });

app.use(cors())
app.use(express.json({ limit: "1mb" }));
app.use(express.static('public'));
app.use(UserRoutes);
app.use(Image) ;
app.use(ProductRoutes) ;

 
  
// )


