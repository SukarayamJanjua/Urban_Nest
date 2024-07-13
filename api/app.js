import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import aichatRoute from "./routes/openai.route.js";
// import chatRoute from "./routes/chat.route.js";
// import messageRoute from "./routes/message.route.js";
import dotenv from 'dotenv';

dotenv.config();


const app = express();

app.use(cors({ origin: https://urban-nest-client.onrender.com/, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
// app.use("/api/chats", chatRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/chats", aichatRoute);
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});


const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log("Server is running!");
});
