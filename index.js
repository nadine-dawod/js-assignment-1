// OBJECT - ACCOUNT //

 const account = {
    name: "Nadine",

//array that hold expenses
    expenses: [],

//array that hold income
    income: [],

//add expense to the expenses array
    addExpenses: function(){
      if (inputExpense) {
      this.expenses.push(inputExpense)
   }
}, 

//add income to the income array
    addIncome: function(){
      if (inputIncome) {
      this.income.push(inputIncome)
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

function inputExpense () {
   parseFloat(prompt("How much was your expense?"));
}
function inputIncome () {
   parseFloat(prompt("How much was your income?"));
}

// DECLARING THE MENU //
function menu () {
   const choose = parseFloat(prompt(`Please choose an option:
   1) Add income, 2) Add expense, 3) List all expenses, 4) See balance`));

   switch (choose) {
      case 1:
         inputIncome();
         for (account.expenses = 0; account.expenses < this.account.expenses.length )
         break;
      case 2:
         inputExpense ();
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

menu ();
