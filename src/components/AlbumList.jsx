import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";

const AlbumList = ({ user }) => {
  const { data, isLoading, error } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useAddAlbumMutation();
  // const result = useFetchAlbumsQuery(user);
  // console.log(result);

  let content;

  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={4} />;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;

      return (
        <ExpandablePanel header={header} key={album.id}>
          List Of Photos
        </ExpandablePanel>
      );
    });
  }

  function handleAddAlbum() {
    addAlbum(user);
  }

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <p>Albums By {user.name}</p>
        <Button onClick={handleAddAlbum}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumList;
