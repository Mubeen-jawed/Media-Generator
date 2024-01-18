import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:8080/users", {
    name: "1",
  });

  return response.data;
});

export { addUser };
