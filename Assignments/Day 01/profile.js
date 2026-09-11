const myName = "Saad";
const myCity = "Suez";
const myPurpose = "I joined this track to start a new career";

function final(name, city, purpose) {
    return `My name is ${name}. I live in ${city}. ${purpose}`;
}

console.log(final(myName, myCity, myPurpose));
console.log(`Node.js version: ${process.version}`);