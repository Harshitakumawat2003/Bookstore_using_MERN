// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// const app = express();

// dotenv.config();

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// // connext to mongodb
// try{
// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// console.log("Connected to mongodb")
// }
// catch(error){
// console.log("Error:",error)
// }

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI.replace("localhost", "127.0.0.1");

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error:", error));

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
