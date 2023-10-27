// OBJECT - ACCOUNT //

 const account = {
    name: "Nadine",

//array that hold expenses
    expenses: [],

//array that hold income
    income: [],

//add expense to the expenses array
    addExpenses: function(){
      if (inputExpense()) {
      this.expenses.push(inputExpense) //fill method or push method??
   }
}, 

//add income to the income array
    addIncome: function(){
      if (inputIncome) {
      this.income.push(inputIncome) //fill method or push method??
   }
},

//list all the expenses in the expenses array
    listAllExpenses: function (){
      for (let i = 0; i < this.expenses.length; i++);
    },

//summarize total balances
    getSummary: function() {
      const totalSum = this.income - this.expenses;
    }
 }

 
/* The menu() function should display the menu with different choices for the user
depending on what the user selects from the menu you should call on the correct
method or poperty from the account object. */

// DECLARING THE MENU //
function menu() {
   const choose = parseFloat(prompt(`Please choose an option:
   1) Add income, 2) Add expense, 3) List all expenses, 4) See balance`));

   switch (choose) {
      case 1:
         account.income.push(prompt("How much was your income?"));
         break;
      case 2:
         account.expenses.push(prompt("How much was your expense?"));
         break;
      case 3: 
         listAllExpenses();
         alert(`These are your expenses: ${expenses})`);
         break;
      case 4:
         getSummary();
         alert(`This is your balance: ${totalSum})`);
         break;
      default:
         alert(`Sorry, only numbers 1 to 4 are valid`);
   }
}

// CALLING THE MENU //

menu();
console.log(account.income);
console.log(account.expenses);