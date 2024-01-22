/*
let recept = {
    timemin: 3,
    vegetables: {
        v1: "carrotte",
        v2: "patate",
    }, 
    meat: ["mouton", "chevre", "vache"],
    spices: ["salt", "pepper"],
  }

  console.log(recept);
*/
function createPerson(name, age) {
    return {
        name,
        age,
        introduce() {
            return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
        }
    };
}

let person = createPerson(`Sinterklaas`, 115);
console.log(person.introduce());

  process.exit();