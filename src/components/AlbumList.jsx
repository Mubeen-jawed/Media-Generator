import React from "react";
import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";

const AlbumList = ({ user }) => {
  const { data, isLoading, error } = useFetchAlbumsQuery(user);
  const result = useFetchAlbumsQuery(user);
  console.log(result);

  let content;

  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={4} />;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = data.map((album) => {
      const header = <div> {album.title}</div>;

      <ExpandablePanel header={header} key={album.id}>
        List Of Photos
      </ExpandablePanel>;
    });
  }

  console.log(data, isLoading, error);

  return (
    <div>
      <div className="mb-4">Albums By {user.name}</div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumList;
