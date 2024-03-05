import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk("users/add", async () => {
  try {
    // Fetch random user data
    const response = await axios.get("https://randomuser.me/api");
    const user = response.data.results[0];

    // Create user with the fetched data
    const createUserResponse = await axios.post("http://localhost:8080/users", {
      name: `${user.name.first} ${user.name.last}`,
    });

    // Log the fetched data
    console.log(response.data);

    return createUserResponse.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error; // Rethrow the error for the calling code to handle
  }
});

export { addUser };
