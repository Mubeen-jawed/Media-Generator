import React, { useState } from "react";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import { GoTrash } from "react-icons/go";
import Button from "./Button";

const UsersListItem = ({ user }) => {
  const [deleteUser, isDeletingUser, isDeletingError] = useThunk(removeUser);

  function handleDelete(user) {
    deleteUser(user);
  }

  return (
    <div>
      <div className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          <div className="flex flex-row justify-between items-center">
            <Button
              className="mr-3"
              loading={isDeletingUser}
              onClick={() => handleDelete(user)}
            >
              <GoTrash />
            </Button>
            {isDeletingError && "Error Deleting User!"}
            {user.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
