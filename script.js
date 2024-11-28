// JS Event Listeners

//  An Event is an action performed by the user on a website
// E.g. clicking a button, pressing a keyboard key

// Always add an ID to any element that JavaScript needs to find (e.g, buttons and inputs)

// addEventListener("event". function) command is used to "turn on" a button
// getElementById("ID-name") command tells JavaScript to look for an element using the ID
// A function is a group of code that runs when called on.
// Name your function similar to how you name variables

// Console error: cannot read properties of null. This is almost always a spelling mistake on the ID.
// Console errors: give you the line of code where the error was found.

document.getElementById("pizza-btn").addEventListener("click", orderPizza);

function orderPizza() {
  var size = prompt("What size pizza?");
  var topping1 = prompt("First topping?");
  var topping2 = prompt("Second topping?");

  var output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 15 minutes!`;

  alert(output);
}

// Create a button that, when clicked, Asks the user for their name and city.
// In the CONSOLE, display: Hello, <name> from <city>!

document.getElementById("greet-btn").addEventListener("click", greetings);

function greetings() {
  // input: get name and city from the user
  var name = prompt("what is your name?");
  var city = prompt("what city are you from?");

  // process
  var greeting = `Hello, ${name} from ${city}!`;

  // output
  console.log(greeting);
}

// You Try:
// Create a button that, when clicked, does the following:
// - Asks the user for two numbers
// - Asks the user for two animals
// - Displays a sentence in an alart window that says, fore.g.
//    "I own 75 cents and 21 dogs" or
//    'I own 5 lizards and 1000 chickens

document.getElementById("animal-btn").addEventListener("click", animals);

function animals() {
  // Input
  var animal1 = prompt("What animal do you like the most?");
  var animal2 = prompt("What is your second most liked animal?");

  // process
  var output3 = `You like ${animal2} but you dont like it as much as ${animal1}`;

  // output
  alert(output3);
}

document.getElementById("phrse1").addEventListener("click", phrse1);

function phrse1() {
  phrseOne = "devil";

  alert(phrseOne);
}

document.getElementById("phrse2").addEventListener("click", phrse2);

function phrse2() {
  phrseTwo = "weather";

  alert(phrseTwo);
}

document.getElementById("phrse3").addEventListener("click", phrse3);

function phrse3() {
  phrseThree = "of the doubt";

  alert(phrseThree);
}

document.getElementById("phrse4").addEventListener("click", phrse4);

function phrse4() {
  phrseFour = "science";

  alert(phrseFour);
}

document.getElementById("phrse5").addEventListener("click", phrse5);

function phrse5() {
  phrseFive = "slack";

  alert(phrseFive);
}
