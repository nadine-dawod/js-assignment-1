// OBJECT //

const account = {
   name: "Nadine",

//array that hold expenses
   expenses: [],

//array that hold income//
   income: [],

//add income to the income array
   addIncome: function(){
     this.income.push(parseFloat(prompt(`${this.name}, how much was your income?
      Please enter an amount.`)));
      return;
   },

//add expense to the expenses array
   addExpenses: function(){
      this.expenses.push(prompt(`${this.name}, what was your expense? 
      For example rent, food, etc`));
      this.expenses.push(parseFloat(prompt(`${this.name}, how much was your expense?
      Please enter an amount.`)));
   }, 
 
//list all the expenses in the expenses array
   listAllExpenses: function (){
      alert(`${this.name}, these are your expenses:
 ${this.expenses.join(" \n ")}`)
   },

//summarize total balances // DOESNT WORK
   getSummary: function() {
      alert(`${this.name}, 
      your total income is ${sumIncome()} kronor,
      your total expenses are ${sumExpenses()} kronor,
      this makes your balance ${sumIncome() - sumExpenses()} kronor.`);
   }
}

// SUMMARIZING INCOME ARRAY //

function sumIncome() {
   let totalIncome = 0;
   for(let i = 0; i <account.income.length; i++) {
      totalIncome = totalIncome + account.income[i];
   }
   return totalIncome;
}


// SUMMARIZING EXPENSE ARRAY //

function sumExpenses() {
   let totalExpenses = 0;
   for(let i = 0; i <account.expenses.length; i++) {
      if (typeof account.expenses[i] !== "string") { 
      totalExpenses = totalExpenses + account.expenses[i];}
   }
   return totalExpenses;
}


// DECLARING THE MENU //

function menu() {

   const choose = parseFloat(prompt(`Please choose an option:
   1) Add income, 
   2) Add expense, 
   3) List all expenses, 
   4) See balance, 
   5) Exit program.`));
   
      switch (choose) {
            case 1: // calling function in object
            account.addIncome();
            menu();

            case 2: // calling function in object
            account.addExpenses();
            menu();
            
            case 3: // calling function in object
            account.listAllExpenses();
            menu();

            case 4: // calling function in object
            account.getSummary();
            menu();

            case 5: // exit program
            break;

            default:
            alert(`Sorry, only numbers 1 to 4 are valid`);
            menu();
   }  
}

// CALLING THE MENU - RUN THE PROGRAM //
menu();



/* Motivate why choosing a switch statement rather than if:
Switch just felt cleaner honestly and made more sense to use when
there where multiple options. Also I wanted to try out different
things and if..else feels like a statemnt I will propblably use in
other parts of the project */