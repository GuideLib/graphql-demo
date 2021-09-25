const users = require("./data/users");

module.exports = {
    getUsers() {
        return users;
    },
    getUserByUserName(username) {
        return users.find(user => user.username == username);
    },
    getUsersByOrganizationName(organizationName) {
        return users.filter(user => user.organizations.includes(organizationName));
    },
}
