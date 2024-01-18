import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:8080/users");

  // Dev Only!!
  await pause(1000);

  return response.data;
});

// Dev Only!!!
const pause = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
