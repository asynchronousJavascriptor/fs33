// user se ek number maango
// ab us number ko actual number banaao
// ab do possibilities hai :
// ya to value NaN banegi ya fir actual Number
// check karo if else ke through
// if isNaN(____) comes true user ne jo diya tha wo string tha
// else user ne jo diya tha wo number tha

let age = prompt("age");
age = Number(age);

if (isNaN(age)) {
  console.log("invalid input");
} else {
  console.log("valid");
}
