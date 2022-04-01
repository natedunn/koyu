import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";

const schema = {
  Setting: list({
    fields: {
      siteName: text({ validation: { isRequired: true } }),
      siteDescription: text({ validation: { isRequired: true } }),
    },
    ui: {
      isHidden: true,
    },
  }),
};

export default schema;
