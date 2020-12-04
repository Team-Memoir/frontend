import { init } from "@rematch/core";
import user from "./user.model";

const store = init({
  models: {
    user,
  },
});

export default store;
