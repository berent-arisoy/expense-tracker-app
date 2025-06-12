const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
const { name } = req.body;
if (!name) return res.status(400).json({ message: "Group name required" });

try {
await db.execute("INSERT INTO groups (name) VALUES (?)", [name]);
res.status(201).json({ message: "Group created" });
} catch (error) {
console.error("Group creation error:", error);
res.status(500).json({ message: "DB error" });
}
});

module.exports = router;