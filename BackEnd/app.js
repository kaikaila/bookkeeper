//通过require关键字，引入外部模块，库、文件
const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./db/db"); // 引入database from mongoDB
const { routes } = require("./routes/transactions");
//The readdirSync function from the fs (File System) module in Node.js is used to synchronously read the contents of a directory
const { readdirSync } = require("fs");

//.config() 是 dotenv 的一个方法，调用后会解析 .env 文件的内容，并把其中的键值对加载到 process.env 中。
require("dotenv").config();
const PORT = process.env.PORT;

// middleware
// express是用来快速创建服务器端应用
// 解析请求体中的 JSON 数据，将其转换为 JavaScript 对象并赋值给 req.body。
app.use(express.json());
// 启用跨域资源共享（CORS），允许前端跨域访问后端资源，解决跨域请求限制问题。
app.use(cors());

//routes
//dynamically importing route handlers from the ./routes directory and registering them with an Express app.
// require: Dynamically imports the route module from the ./routes directory.
// app.use: Registers the route module under the path /api/v1.
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);
// from the homepage
// 写好这一步之后，在postman发一条 localhost：3010就能收到回复Hello, World
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("You are listening to port:", PORT);
  });
};
//https://www.youtube.com/watch?v=i0JesTevAcA
//教程看到12:08

server();
