import React from "react";
import PhotoListItem from "./PhotoListItem";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

const PhotosList = ({ album }) => {
  const { data, isLoading, error } = useFetchPhotosQuery(album);
  const [addPhoto, result] = useAddPhotoMutation();

  function handleAddUser() {
    addPhoto(album);
    console.log(data);
  }

  let content;

  if (isLoading) {
    content = <Skeleton times={4} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error Fetching Photos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo}></PhotoListItem>;
    });
  }

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="font-bold text-lg">Photos In {album.title}</h1>
        <Button loading={result.isLoading} onClick={handleAddUser}>
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-wrap mx-8 flex-row justify-center">
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
