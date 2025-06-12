const express = require("express");
const router = express.Router();
const db = require("../db");

//GET
router.get("/balances", async (req, res) => {
    try {
    const [rows] = await db.execute("SELECT amount, payer, participants FROM expenses");
    const balances = {};

for (const row of rows) {
  const participants = row.participants.split(",").map(p => p.trim());
  const splitAmount = row.amount / participants.length;

  // Payer gets credit
  balances[row.payer] = (balances[row.payer] || 0) + row.amount;

  // Each participant owes their share
  for (const person of participants) {
    balances[person] = (balances[person] || 0) - splitAmount;
  }
}

res.status(200).json(balances);

} catch (error) {
    console.error("Error calculating balances:", error);
    res.status(500).json({ message: "Error calculating balances" });
    }
    });



router.get("/", async (req, res) => {
    try {
    const [rows] = await db.execute("SELECT * FROM expenses ORDER BY created_at DESC");
    res.status(200).json(rows);
    } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ message: "Error fetching expenses" });
    }
    });


//POST
router.post("/", async (req, res) => { 
const { amount, description, payer, participants } = req.body;

if (!amount || !description || !payer || !participants) {
return res.status(400).json({ message: "Missing required fields" });
}

if (!payer || !amount || !participants || amount <= 0) {
    return res.status(400).json({ message: "Invalid input data" });
}

try {
const participantsString = participants.join(", ");
await db.execute(
"INSERT INTO expenses (amount, description, payer, participants) VALUES (?, ?, ?, ?)",
[amount, description, payer, participantsString]
);

res.status(201).json({ message: "Expense saved to MySQL" });
} catch (err) {
console.error("DB error:", err);
res.status(500).json({ message: "Internal server error" });
}
});

module.exports = router;
