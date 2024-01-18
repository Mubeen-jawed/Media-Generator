import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser, removeUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UsersListItem from "./UsersListItem";
import { useThunk } from "../hooks/use-thunk";

const UserList = () => {
  const dispatch = useDispatch();

  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUser, isLoadingCreateUser, loadingCreatingError] =
    useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, []);

  let content;

  if (isLoadingUsers) {
    content = <Skeleton className="h-10 w-full" times={6} />;
  } else if (loadingUsersError) {
    content = <div>Some Error</div>;
  } else {
    content = data.map((user) => <UsersListItem key={user.id} user={user} />);
  }

  function handleAddUser() {
    doCreateUser();
  }

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isLoadingCreateUser} onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  );
};

export default UserList;
