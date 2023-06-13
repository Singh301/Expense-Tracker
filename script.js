// Retrieve expenses from local storage
function getExpenses() {
    let expenses = [];
    if (localStorage.getItem('expenses')) {
      expenses = JSON.parse(localStorage.getItem('expenses'));
    }
    return expenses;
  }
  
  // Save expenses to local storage
  function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }
  
  // Add expense to the list
  function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = document.getElementById('expenseAmount').value;
  
    // Create new expense object
    const expense = {
      name: expenseName,
      amount: expenseAmount
    };
  
    // Get current expenses
    const expenses = getExpenses();
  
    // Add new expense to the list
    expenses.push(expense);
  
    // Save updated expenses to local storage
    saveExpenses(expenses);
  
    // Clear input fields
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
  
    // Refresh expense list
    showExpenses();
  }
  
  // Delete expense from the list
  function deleteExpense(index) {
    // Get current expenses
    const expenses = getExpenses();
  
    // Remove expense at the given index
    expenses.splice(index, 1);
  
    // Save updated expenses to local storage
    saveExpenses(expenses);
  
    // Refresh expense list
    showExpenses();
  }
  
  // Display expenses in the list
  function showExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
  
    // Get current expenses
    const expenses = getExpenses();
  
    // Display each expense in the list
    expenses.forEach((expense, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${expense.name}: $${expense.amount} <span class="delete" onclick="deleteExpense(${index})">Delete</span>`;
      expenseList.appendChild(li);
    });
  }
  
  // Load expenses when the page is loaded
  document.addEventListener('DOMContentLoaded', showExpenses);
  
  // Handle form submission
  document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addExpense();
  });
  