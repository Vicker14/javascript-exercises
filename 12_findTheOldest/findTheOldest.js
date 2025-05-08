function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(peopleList) {
    let oldestPerson = peopleList[0];
    for (let i = 1; i < peopleList.length; i++) {
        const currentPersonAge = getAge(peopleList[i].yearOfBirth, peopleList[i].yearOfDeath);
        const oldestPersonAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        if (currentPersonAge > oldestPersonAge) {
            oldestPerson = peopleList[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
