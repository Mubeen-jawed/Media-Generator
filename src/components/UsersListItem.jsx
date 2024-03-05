import React, { useState } from "react";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import axios from "axios";

const UsersListItem = ({ user }) => {
  const [deleteUser, isDeletingUser, isDeletingError] = useThunk(removeUser);

  function handleDelete(user) {
    deleteUser(user);
  }

  const header = (
    <>
      <Button
        className="mr-3"
        loading={isDeletingUser}
        onClick={() => handleDelete(user)}
      >
        <GoTrash />
      </Button>
      {isDeletingError && "Error Deleting User!"}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
