import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("/users/remove", async (user) => {
  const response = await axios.delete(`http://localhost:8080/users/${user.id}`);

  //Fix Me
  return user;
});

export { removeUser };
