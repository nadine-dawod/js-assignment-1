// OBJECT - ACCOUNT //

 const account = {
    name: "Nadine",

//array that hold expenses
    expenses: [],

//array that hold income
    income: [],

//add income to the income array
    addIncome: function(){
      this.income.push(prompt(`How much was your income?`));
   },

//add expense to the expenses array
    addExpenses: function(){
      this.expenses.push(prompt(`How much was your expense?`));      
   }, 

// CHANGE //  
//list all the expenses in the expenses array
    listAllExpenses: function (){
      for (let i = 0; i < this.expenses.length; i++);
   },
// CHANGE //  
//summarize total balances
    getSummary: function() {
      const totalSum = this.income - this.expenses;
   }
}

 
/* 
HOW TO MAKE SO THAT THE MENU () RETURNS TO CHOOSE-PROMPT AFTER INPUT HAVE BEEN DONE IN 1 AND 2? 
CONTINUE WORKING WITH FOR-LOOP ON LINE 42!!
 */

// DECLARING THE MENU //
function menu() {

   for (let i = 1; i <10;) { 

   const choose = parseFloat(prompt(`Please choose an option:
   1) Add income, 2) Add expense, 3) List all expenses, 4) See balance`));

   switch (choose) {
      case 1: // calling function in object
         account.addIncome();
         return choose;
      case 2: // calling function in object
         account.addExpenses();
      case 3: // CHANGE //  
         alert(`These are your expenses: ${expenses})`);
      case 4: // CHANGE //  
         alert(`This is your balance: ${totalSum})`);
      default:
         alert(`Sorry, only numbers 1 to 4 are valid`);
}
   break
}
}

// CALLING THE MENU //

menu();


console.log(account.income);
console.log(account.expenses);

