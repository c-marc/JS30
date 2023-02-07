const people = [
  { name: "Lux", year: 2015 },
  { name: "Irv", year: 1970 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
];

// some()
const isAdult = people.some((p) => {
  const currentYear = new Date().getFullYear();
  return currentYear - p.year >= 19;
});
// every()
const allAdults = people.every((p) => {
  const currentYear = new Date().getFullYear();
  return currentYear - p.year >= 19;
});

// find: filter but just return the first
const comment = comments.find((c) => c.id === 823423);

// find index and remove
const index = comments.findIndex((c) => c.id === 823423);
//comments.splice(index, 1)
// or
const newComments = [
  ...comments.slice(0, index), //up until but without index
  ...comments.slice(index + 1), //from next
];
