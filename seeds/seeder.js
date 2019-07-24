const User = require('../models/User')
const { hashSync } = require('bcryptjs')

const faker = require('faker')

let password = hashSync('12345')

let user = []

for (let i = 1; i <= 10; i++) {
    user.push({
        name: faker.name.findName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
        username: faker.name.firstName() + Date.now(),
        password,
        profilePhoto: faker.image.avatar(),
    })
}

User.bulkCreate(user)
    .then(users => {
        console.log(users.length + ' dummy user created')
    })
    .catch(err => {
        console.log(err)
    })
