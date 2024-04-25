import { createStore } from "vuex";
import auth from "./module/auth";
import meeting from "./module/meeting";
import user from "./module/user";
const store = createStore({
  modules: {
    auth,
    meeting,
    user
  },
});

export default store;