// OBJECT //

const account = {
   name: "Nadine",

//array that hold expenses
   expenses: [3, 6, 8, 9],

//array that hold income
   income: [500, 600],

//add income to the income array
   addIncome: function(){
      this.income.push(parseFloat(prompt(`${this.name}, how much was your income?`)));
   },

//add expense to the expenses array
   addExpenses: function(){
      this.expenses.push(parseFloat(prompt(`${this.name}, what was your expense?`)));
      this.expenses.push(parseFloat(prompt(`${this.name}, how much was your expense?`)));      
   }, 
 
//list all the expenses in the expenses array
   listAllExpenses: function (){
      alert(`${this.name}, these are your expenses: 
      ${this.expenses.join(" \n\ ")}`)
   }, //how to make the first nr not indented in the alert-box???



//summarize total balances // DOESNT WORK

getTotal: function () {
   let sumIncome = this.income.values(); //summarize income-array 
   let sumExpenses = this.expenses.values(); //summarize expenses-arraY

   const totalSum = sumIncome - sumExpenses; 
   return sumIncome, sumExpenses, totalSum;  
 }, 
   
   getSummary: function() {
      alert(`${this.name}, 
      your total income is ${this.sumIncome},
      your total expenses are ${this.sumExpenses},
      this makes your balance ${this.totalSum}`);
   }

}




// DECLARING THE MENU // HOW TO MAKE THE MENU GO BACK TO LANDING-PAGE???
function menu() {

   const choose = parseFloat(prompt(`Please choose an option:
   1) Add income, 2) Add expense, 3) List all expenses, 4) See balance`));
   
      switch (choose) {
            case 1: // calling function in object
            account.addIncome();
            // I WANT TO GO BACK TO CHOOSE - HOW????

            case 2: // calling function in object
            account.addExpenses();
            // I WANT TO GO BACK TO CHOOSE - HOW????

            case 3: // calling function in object
            account.listAllExpenses();
            // I WANT TO GO BACK TO CHOOSE - HOW????

            case 4: // calling function in object
            account.getSummary();
            // I WANT TO GO BACK TO CHOOSE - HOW????

            default:
            alert(`Sorry, only numbers 1 to 4 are valid`);

      break
   }  
}

// CALLING THE MENU SO THAT IT IS ACTUALLY DISPLAYED IN BROWSER
//menu();





/* Motivate why choosing a switch statement rather than if:
Switch just felt cleaner honestly and made more sense to use when
there where multiple options. Also I wanted to try out different
things and if..else feels like a statemnt I will propblably use in
other parts of the project */