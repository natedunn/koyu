import { list } from "@keystone-6/core";
import {
  checkbox,
  password,
  relationship,
  text,
  timestamp,
  select,
} from "@keystone-6/core/fields";

// Imagine this as an import plugin
const Roles = {
  Role: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      user: relationship({ ref: "User.role", many: true }),
    },
  }),
};

export default Roles;
