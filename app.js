// Import express
const express = require('express');
const app = express();
const cookieParser=require("cookie-parser");
const path=require("path");
const userModel=require("./models/user.model");
const productModel=require("./models/product.model");
const db=require("./config/mongoose.connection");
const ownersRouter=require("./routes/ownersRouter");
const productsRouter=require("./routes/productsRouter");
const usersRouter=require("./routes/usersRouter");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);



// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});