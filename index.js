const express  = require("express");
const app  = express();
require("dotenv").config();

const PORT  = process.env.PORT || 4000
app.use(express.json());
const authRoutes = require("./routes/route")
app.use("/api/v1",authRoutes);
app.listen(PORT,()=>{
    console.log("app run ");

})

app.get("/",(req,res)=>{
    res.send("<h1>app run sucessf</h1>")
})

const dbConnect = require("./config/dbconnect");
dbConnect();