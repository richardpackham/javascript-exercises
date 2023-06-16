const findTheOldest = function(people) {
    max = 0
    maxPerson = ""
    people.forEach(person =>{
        if (!("yearOfDeath" in person)){
            person.yearOfDeath = new Date().getFullYear()
        }
        person.age = person.yearOfDeath - person.yearOfBirth
        if (person.age > max) {
            max = person.age;
            maxPerson = person.name;
        }
    })
    const pos = people.map(e => e.age).indexOf(max);
    return people[pos]
};

// Do not edit below this line
module.exports = findTheOldest;
