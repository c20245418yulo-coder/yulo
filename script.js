console. log("Hello, World!");
console.log("From script.js file.");

const myName = "Miles";
let age = 20;
age = 21;
let myNumber = 9105794473;
const address = "Basag 3";


console.log(`My name is ${myName}, ${age} years old.`);
console.log(`Number:${myNumber}.`);
console.log(`Address: ${address}.`);
console.log(67);


function greet(greetings,name) {
    if (Array.isArray(name)) {
      name = name.join(", ");
        
    }
    return `${greetings} sa enyu ${name}`;
}
console.log(greet("mayung aga", ["Miles", "Bai", "Soy", "Tol", "Erp"]));

const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);


   

  









