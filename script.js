let balance = 0;
const balanceAmount = document.getElementById("balance-amount");
const transactionDescription = document.getElementById("transaction-description");
const transactionAmount = document.getElementById("transaction-amount");
const addTransactionBtn = document.getElementById("add-transaction-btn");
const transactionList = document.getElementById("transaction-list");
const errorMessage = document.getElementById("error-message");

// Event listener for the "Add Transaction" button
addTransactionBtn.addEventListener("click", function() {
    const description = transactionDescription.value.trim();
    const amount = parseFloat(transactionAmount.value);

    // Validate inputs
    if (!description || isNaN(amount)) {
        errorMessage.textContent = "Please enter a valid description and amount.";
        errorMessage.classList.remove("hidden");
        return;
    }

    // Add transaction to the list and update balance
    addTransaction(description, amount);

    // Clear inputs and hide error message
    transactionDescription.value = "";
    transactionAmount.value = "";
    errorMessage.classList.add("hidden");
});

// Function to add a transaction
function addTransaction(description, amount) {
    // Update balance
    balance += amount;
    balanceAmount.textContent = balance.toFixed(2);

    // Create a new list item
    const transactionItem = document.createElement("li");
    transactionItem.textContent = `${description}: $${amount.toFixed(2)}`;
    transactionItem.classList.add(amount >= 0 ? "income" : "expense");

    // Add the new item to the list
    transactionList.appendChild(transactionItem);
}
