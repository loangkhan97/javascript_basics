const persons = [
    {firstname : "Imran", lastname: "Khan"},
    {firstname : "Loang", lastname: "Khan"},
    {firstname : "Saud", lastname: "Ahmed"}
  ];
  
 const fullName = persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

  console.log(fullName)

  const names = ["Alice", "Bob", "Charlie", "David"];

// Use the map function to create a new array with the lengths of the names
const nameLengths = names.map((name) => name.length);

console.log(nameLengths);