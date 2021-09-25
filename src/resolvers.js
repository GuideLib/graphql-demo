const user = require("../db/user");
const organization = require("../db/organization");

const resolvers = {
    Query: {
      users() {
        return user.getUsers();
      },
      user(parent, args, context, info) {
        return user.getUserByUserName(args.username);
      },
      organizations() {
        return organization.getOrganizations();
      },
      organization(parent, args, context, info) {
        return organization.getOrganizationByName(args.name);
      },
    },
    User: {
      organizations(parent) {
        return parent.organizations.map((name) => organization.getOrganizationByName(name));
      }
    },
    Organization: {
      staff(parent) {
        return user.getUsersByOrganizationName(parent.name);
      },
    },
  };

module.exports = resolvers;