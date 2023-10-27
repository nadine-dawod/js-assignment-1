


/* 
create a function called menu()

the function menu() should only be responsible to show the different choices
for the user.

 You can use a switch or if/else statement for your
different menu choices. Please motivate you choice in a comment.
 */


/* REMEMBER TO HANDLE POTENTIAL ERRORS - A USER SHOULD NOT BE ABLE TO ADD AN EMPTY 
INUT OR SOMETHING THAT IS NOT VALID */




// CODE TO HELP YOU GET STARTED

// Here are some code snippets to help you get started. You need to place them at the correct
// place in your code but this is the logic for some parts of your assignment.

// if we want to take an input from the user in a quite nice way we can use the propmt() function
// the prompt will show a window to the user where we can add a message and it will also display
// an input field where the user can type something. In order to make this work a bit easier
// we need to wrap the propmt() in a function called parseFloat(). Why is that? You need to do some
// googling anf the put your answer in a comment in your code.
// the syntax you can use looks like this:
const amount = parseFloat(prompt("How much was your expense?"));
// the answer that the user will put in the input box will get stored in the variable amount.



// In order to show all elements in an array we need to loop through it. In this assignment a
// forEach loop would be good to use. If you want to display the outcome of each element in the
// array on separate lines you can add:
("\n");
// for example:
alert("This is a message " + "\n" + "with a new line");
// to your ouput. This will make the nes output on a new line.




// to make the menu look nice we should not console.log any output. Instead we shoul use either alert()
// or propmt()
// we use alert() when we just want to display something to the user, for example a message:
alert("This is a message in an alert box!");
// we use the prompt() when we want to ask the user to do something cause the prompt()
// will display any message that we want and also display an input field where the user
// can type an input. Like this:
const age = parseFloat(propmpt("How old are you?"));
// whatever the user types in the input field will be stored in the variable age.
