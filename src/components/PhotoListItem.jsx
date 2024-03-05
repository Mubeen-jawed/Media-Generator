import React from "react";
import { useRemovePhotoMutation } from "../store";
import { GoTrash } from "react-icons/go";

const PhotoListItem = ({ photo }) => {
  const [removePhoto, result] = useRemovePhotoMutation();

  function handleDelete() {
    removePhoto(photo);
  }

  return (
    <div onClick={handleDelete} className="relative m-2 cursor-pointer">
      <img className="h-20 w-20 rounded-md" src={photo.url} alt="Random Pic" />

      <div className="absolute justify-center items-center inset-0 flex hover:bg-gray-200 opacity-0 hover:opacity-60 transition-all duration-200">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotoListItem;
