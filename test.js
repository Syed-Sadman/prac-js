// // instead of deleting element from an object or array using "DELETE" key, spreading property through destructuring can be a good practice

// const obj = {
//   age: "simon",
//   handle: "hand this using spread",
//   taskName: "give a task name",
// };

// const { age, ...newSimon } = obj; // spreading the rest of the properties using spread operator
// //newSimon creates a new object "{ handle: 'hand this using spread', taskName: 'give a task name'}"

// console.log(age);
// console.log(newSimon);

// // object or array can be destructured using the index number

// const country = ["USA", "Canada", "Denmark", "Bolivia", "Austria"];

// const { 1: ca, 3: bv } = country;

// console.log(ca);
// console.log(bv);

// const newObj = {
//   age: 23,
//   handle: "hand this using spread",
//   taskName: "give a task name",
// };

// const replacer = (key, value) => (key === "age" ? value * 2 : value);

// const foostr = JSON.stringify(newObj, replacer);

// console.log(foostr);

// const number = 1_3242_322_32423;
const country = ["1", "2", "4", "4", "5", "1", "2", "4", "4", "5"];

console.log([...new Set(country)]);
