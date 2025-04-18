let expenses = [];

function addExpense() {
  const titleInput = document.getElementById("title");
  const amountInput = document.getElementById("amount");

  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (title === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter valid expense details.");
    return;
  }

  const expense = {
    id: Date.now(),
    title,
    amount
  };

  expenses.push(expense);
  titleInput.value = "";
  amountInput.value = "";

  updateExpenseList();
  updateTotal();
}

function updateExpenseList() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";

  expenses.forEach(exp => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-100 p-2 rounded";

    li.innerHTML = `
      <span>${exp.title}: ₹${exp.amount}</span>
      <button onclick="deleteExpense(${exp.id})" class="text-red-500 hover:underline">Delete</button>
    `;

    list.appendChild(li);
  });
}

function updateTotal() {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  document.getElementById("total").innerText = total.toFixed(2);
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  updateExpenseList();
  updateTotal();
}
