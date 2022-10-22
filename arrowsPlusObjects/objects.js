var person = {
    name: "Ahmed",
    Qualification: "Masters",
    Designation: "IT Officer",
    Organization: "TEVTA",
}

console.log(person.name);
console.log(person['Designation']);
console.log(person.Organization);
console.log(person['Qualification']);

person.PS = 'BS-16';
console.log(person['PS']);

person['yearOfJoining'] = 2017;
console.log(person.yearOfJoining);

var {name, Designation} = person;

console.log(name);
console.log(Designation);

var keys = Object.keys(person);
console.log(keys)

var values = Object.values(person);
console.log(values)

/*
    Objects.entries(perosn)
    constructor function
    concept of this
    this with functions in js
    arguments = keyword
*/
var entries = Object.entries(person);
console.log(entries)


