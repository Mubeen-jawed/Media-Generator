import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumListItem = ({ album }) => {
  const [deleteAlbum, result] = useRemoveAlbumMutation();

  const header = (
    <div className="flex items-center ">
      <Button
        loading={result.isLoading}
        className="mr-3"
        onClick={handleDelete}
      >
        <GoTrash />
      </Button>
      <p>{album.title}</p>
    </div>
  );

  function handleDelete() {
    deleteAlbum(album);
  }

  return (
    <ExpandablePanel header={header} key={album.id}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumListItem;
