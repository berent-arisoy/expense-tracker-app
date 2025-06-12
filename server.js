const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON body

// Routes
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/expenses", require("./routes/expenses"));
app.use("/api/groups", require("./routes/groups"));
app.use("/api/settlements", require("./routes/settlements"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/expenses", (req, res) => {
    res.sendFile(path.join(__dirname, "public/expenses.html"));
});

app.get("/groups", (req, res) => {
    res.sendFile(path.join(__dirname, "public/groups.html"));
});

app.listen(3000, () => {
console.log("Server is running at http://localhost:3000");
});