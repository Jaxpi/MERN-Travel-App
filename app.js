const express = require("express");
const connectDB = require("./mern-travel-app/config/db");

const cors = require("cors");

const app = express();

const books = require("./server/routes/api/books");

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Travel App Coming Soon"));

app.use("/api/books", books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
