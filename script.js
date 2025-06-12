document.getElementById("expense-form").addEventListener("submit", function (e) {
    const payer = document.getElementById("payer").value.trim();
    const amount = parseFloat(document.getElementById("amount").value.trim());
    const participants = document.getElementById("participants").value.trim();
    
    if (!payer || isNaN(amount) || amount <= 0 || !participants) {
    e.preventDefault();
    alert("Please fill out all fields correctly before submitting.");
    return;
    }
    });