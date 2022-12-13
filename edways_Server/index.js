const express = require("express");
var cors = require('cors');
const app = express();
const port = 3001;
const productsRouter = require("./routes/products");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.options('*', cors({
    origin: true,
    optionsSuccessStatus: 200,
    exposedHeaders: '*'
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/products", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});