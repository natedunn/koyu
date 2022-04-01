// Import Plugins
import plugins from "./plugins";
import Roles from "./plugins/roles";

const config = {
  plugins: {
    // Add plugins to list
    ...plugins,
    ...Roles,
  },
};

export default config;
