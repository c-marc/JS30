const inventors = [
  { first: "Marie", last: "Curie", year: 1867, passed: 1954 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = ["Doe, John", "Morin, Raoul"];

// filter
// 1. Filter the list of inventors for thos who were born in the 1500's
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
);
console.table(fifteen);

// map
//2. Give us an array of the inventory first and last names
const fullNames = inventor.map((i) => `${i.first} ${i.name}`);

// sort
// 3. Sort the inventors by birthday, oldest to youngest
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

// reduce
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

//
// 5. Sort the inventorss by years lives
const oldest = inventors.sort((a, b) => {
  const lastG = a.passed - a.year;
  const nextG = b.passed - b.year;
  return lastGuy > nextG ? -1 : 1;
});

// 6. create a list of boulevard in Paris that contain "de" anywher in the name
// go to: https://en/wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector(".mw-category");
//const links = Array.from(category.querySelectorAll("a")); //nodeList to array!
//or from any iterable
const links = [...category.querySelectorAll("a")];
const de = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes("de"));

// 7. Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});

// 8. Sum if the instancess of each of these
const data = ["car", "car", "truck", "bike", "bike"];
const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    //if no entry
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {}); //start with blank object
