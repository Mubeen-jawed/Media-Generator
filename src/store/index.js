import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { removeUser } from "./thunks/removeUser";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export { store, fetchUsers, addUser, removeUser };
