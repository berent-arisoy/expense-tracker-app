# 📟 Expense Tracker Web Application

A full-stack expense sharing application built using Node.js, Express, MySQL, and vanilla HTML/CSS/JavaScript. It allows users to record shared expenses, assign payers and participants, and view a running history of all transactions.

---

## ✨ Features

- Add a new shared expense (amount, payer, participants, description)
- Upload an optional receipt image
- View all past expenses in a dynamic table
- Filter expenses by payer name
- Persistent storage using MySQL
- Clean, responsive UI with basic styling

---

## 🏗️ Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MySQL
- Tools: XAMPP (for MySQL & phpMyAdmin), Git

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MySQL Server (e.g., via XAMPP)
- Git (for version control)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker-app.git
cd expense-tracker-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure MySQL

Use phpMyAdmin or MySQL CLI to create a database:

```sql
CREATE DATABASE expense_tracker;
```

Run the provided SQL file or schema (if available) to create the `expenses` table.

Update database config in server.js:

```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'expense_tracker'
});
```

### 4. Start the Server

```bash
node server.js
```

Backend runs on http://localhost:3000

### 5. Open Frontend

You can open the HTML files directly in the browser or serve them with a static server.

Example (open add-expense.html):

```bash
open public/expenses.html
```

---

## 📁 Folder Structure

```
expense-tracker-app/
├── public/
│   ├── expenses.html
│   ├── index.html
├── routes/
│   ├── expenses.js
│   ├── settlements.js
├── db.js
├── expense_tracker.sql
├── package-lock.json
├── package.json
├── README.md
├── script.js
├── server.js
├── style.css
```

---

## 💾 Sample Expense Format

```json
{
  "amount": 120.50,
  "description": "Dinner at Italian Bistro",
  "payer": "User A",
  "participants": ["User A", "User B"]
}
```

---

## 🔀 Git Flow

- main: Production-ready branch
- feature/*: Used for new features (e.g. view page, filter logic)

Example:

```bash
git checkout -b feature/view-expenses
```

---

## ✅ Future Improvements

- User login/authentication
- Balance summary per user
- Receipt image viewer
- Mobile responsive design

---

## 🧑‍💻 Author
Bunyamin Saka , Metin Berent Arisoy
Computer Science Student @ WSB Merito Poznań  

---

## 📜 License
This project is for educational purposes only.
