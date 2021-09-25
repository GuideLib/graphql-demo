const organizations = require("./data/organizations");

module.exports = {
    getOrganizations() {
        return organizations;
    },
    getOrganizationByName(name) {
        return organizations.find(organization => organization.name == name);
    },
}