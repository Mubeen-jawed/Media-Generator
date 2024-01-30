import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { removeUser } from "./thunks/removeUser";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumApi";

const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },

  middleware: (getDefaultMiddleare) => {
    return getDefaultMiddleare().concat(albumsApi.middleware);
  },
});

window.store = store;

setupListeners(store.dispatch);

export { store, fetchUsers, addUser, removeUser };
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumApi";
