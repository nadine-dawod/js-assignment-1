// OBJECT //

const account = {
   name: "Nadine",

//array that hold expenses
   expenses: ["food", 600, "gas", 956],

//array that hold income
   income: [8000, 2000],

//add income to the income array
   addIncome: function(){
      this.income.push(parseFloat(prompt(`${this.name}, how much was your income?
      Please enter an amount.`)));
   },

//add expense to the expenses array
   addExpenses: function(){
      this.expenses.push(parseFloat(prompt(`${this.name}, what was your expense? 
      For example rent, food, etc`)));
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
      your total income is ,
      your total expenses are ${sumExpenses},
      this makes your balance .`);
   }
}

// TRY-OUT AREA // 

for(let i = 0; i < account.expenses.length; i++) {
let sumExpenses = account.expenses[i].filter(checkNumber)

function checkNumber (num) {
   return typeof Number}

console.log(sumExpenses);   





// DECLARING THE MENU 
// HOW TO MAKE THE MENU GO BACK TO LANDING-PAGE???

function menu() {

   const choose = parseFloat(prompt(`Please choose an option:
   1) Add income, 2) Add expense, 3) List all expenses, 4) See balance`));
   
      switch (choose) {
            case 1: // calling function in object
            account.addIncome();
            // I WANT TO GO BACK TO CHOOSE - HOW????
            return 

            case 2: // calling function in object
            account.addExpenses();
            // I WANT TO GO BACK TO CHOOSE - HOW????

            case 3: // calling function in object
            account.listAllExpenses();
            // I WANT TO GO BACK TO CHOOSE - HOW????

/*             case 4: // calling function in object
            account.getSummary(); */
            // I WANT TO GO BACK TO CHOOSE - HOW????

            default:
            alert(`Sorry, only numbers 1 to 4 are valid`);
   }  
}

// CALLING THE MENU (SO THAT IT IS ACTUALLY DISPLAYED IN BROWSER)
//menu();






/* Motivate why choosing a switch statement rather than if:
Switch just felt cleaner honestly and made more sense to use when
there where multiple options. Also I wanted to try out different
things and if..else feels like a statemnt I will propblably use in
other parts of the project */