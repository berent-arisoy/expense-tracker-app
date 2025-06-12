const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
const { from, to, amount } = req.body;
if (!from || !to || !amount) return res.status(400).json({ message: "Missing fields" });

try {
await db.execute("INSERT INTO settlements (from_person, to_person, amount) VALUES (?, ?, ?)", [from, to, amount]);
res.status(201).json({ message: "Settlement recorded" });
} catch (error) {
console.error("Settlement error:", error);
res.status(500).json({ message: "Failed to record settlement" });
}
});

module.exports = router;