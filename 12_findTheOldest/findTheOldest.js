const findTheOldest = function(peopleDeath) {
    let age = [];
    let i = 0;
    let oldestAge = 0;
    peopleDeath.forEach(element => {
        if (typeof element.yearOfDeath==='undefined') {
            element.yearOfDeath=2025;
        }
        age[i]=element.yearOfDeath-element.yearOfBirth
        i++;
        console.log(age[i-1]);
    });

    // The Math.max() static method returns the largest 
    // of the numbers given as input parameters, or 
    // -Infinity if there are no parameters.
    // ...age because we dont know how many numbers inside the array age
    oldestAge = Math.max(...age);
    console.log(oldestAge);
    // indexOf says in which position of age is the number oldestAge
    // since that is the position of the oldest person, we should return
    // the data from that position of the given array
    return peopleDeath[age.indexOf(oldestAge)];
};


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
