const { User } = require('../models');

const userData = [
    {
        username: "Austin_Rohn19",
        twitter: "austinrohn19",
        github: "austinrohn19",
        email: "austinrohn19@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Tabitha Rohn",
        twitter: ".",
        github: ".",
        email: "tabrohn@gmail.com",
        password: "p@ssword2"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;