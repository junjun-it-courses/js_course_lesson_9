console.log(users);

const ageFemales = {
    from: 24,
    to: 25
}
const femalesArray = filterUser(users, 'female');

const ageMales = {
    from: 10,
    to: 25
}
const malesArray = filterUser(users, 'male', ageMales);

console.log(femalesArray)
console.log(malesArray)




function filterUser(usersArray, gender = 'male', age = null) {
    if(!usersArray.length) { return false }
    const filteredUsers = [];

    for(let i = 0; i <= usersArray.length - 1; i++) {

        if(usersArray[i].gender === gender) {

            if(age !== null) {

                ageFilter(usersArray[i].age, age) ? filteredUsers.push(usersArray[i]) : null;

            } else {

                filteredUsers.push(usersArray[i]);
            }

        }

    }

    return filteredUsers;
}

function ageFilter(currentUserAge, ageSetting) {
    if(currentUserAge >= ageSetting.from && currentUserAge <= ageSetting.to) {
        return true;
    } else {
        return false;
    }
}