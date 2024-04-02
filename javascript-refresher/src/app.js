// Mapping

// Array
const [firstName, lastName] = ["Farrah", "Dionisio"];
console.log(firstName);
console.log(lastName);

// Objects - when working with objects variables should be the same as
// the property names although you can set an alias
const { name: userName, age } = {
  name: "Farrah",
  age: 27,
};
console.log(userName, age);

// via function
function storeOrder({ id, currency }) {
  // destructuring
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
}

storeOrder({ id: 5, currency: "USD", amount: 15.99 });

// Spread Operator
const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Farrah",
  age: 27,
};

const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies]; // Output: (3) ['Sports', 'Cooking', 'Reading'] it pulls values from an array and add it to a new array
console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser); //Output: {isAdmin: true, name: 'Farrah', age: 27}

// new for loop
for (const hobby of hobbies) {
  console.log(hobby); // Output: Sports Cooking
}

const handleTimeout = () => {
  console.log("Timed out!");
};

setTimeout(handleTimeout, 2000); //omit parentheses because handleTimeout will be executed immediately instead of setTimeout
// OR
setTimeout(() => {
  console.log("More time out...");
}, 4000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log("Hi!"));

//Define function inside a function
function init() {
  function greet() {
    console.log("Greet!");
  }

  greet(); //will be available only inside init
}

//greet(); // Error because it can only be run inside the init
init(); //run this instead

//Reference vs. Primitive values
//Primitive Values - string, numbers and booleans. It's special because we can't edit them; With this you are -
// always producing a new value, all values set for this variable will be thrown away
// Reference values - arrays and objects; The value can be edited without reassigning the variable

const hobbies2 = ["Sports", "Cooking"]; // Address is stored
hobbies2.push("Working"); //the array changes but the address does not

const message = "Hello"; //The string is stored in a variable
message = "Hello There"; // ^ The string before will be thrown away not edited;
