let firstName = prompt("enter your firstname");
let lastName = prompt("enter your lastname");
let age = prompt("enter your age");

// console.log("name of user : " + firstName);
// console.log("surename of user : " + lastName);
// console.log("age of user : " + age);

let allInOne = {
    NameOfUser: firstName,
    SurnameOfUser: lastName,
    AgeOfUser: age
};

console.log(allInOne);