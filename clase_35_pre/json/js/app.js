let person = {
    name:"Juan",
    age: 21,
    married: false,
    hobbie: null,
}

let personJSON = JSON.stringify(person);
console.log('person', personJSON);

let personJS = JSON.parse(personJSON);
console.log('personJs',personJS);