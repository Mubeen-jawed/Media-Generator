import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumListItem from "./AlbumListItem";

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
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  function handleAddAlbum() {
    addAlbum(user);
  }

  return (
    <div>
      <div className="mb-2 m-2 flex justify-between items-center">
        <p className="text-lg font-bold">Albums By {user.name}</p>
        <Button loading={result.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumList;
