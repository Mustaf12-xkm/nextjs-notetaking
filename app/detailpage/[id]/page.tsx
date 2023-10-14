"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateNote } from "@/app/components/features/addnoteslice";
import { Note } from "@/app/components/features/addnoteslice";
import { removeNote } from "@/app/components/features/addnoteslice";
import { useRouter } from "next/navigation";
const NoteDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const { notes } = useSelector((state: any) => state.data);

  const selectedNote = notes.find((note: any) => note.id === id);

  const [description, setContent] = useState<string>(selectedNote?.description);
  const [title, setTitle] = useState<string>(selectedNote?.title);
  const dispatch = useDispatch();

  const updatedNote: Note = {
    id: selectedNote?.id,
    title,
    description,
    date: selectedNote?.date
  };

  const handleUpdate = () => {
    dispatch(updateNote({ id: id as string, updatedNote }));
  };

  const handleGoBack = () => {
    router.back();
  };
  const handledelete = () => {
    dispatch(removeNote(id as string));
    router.back();
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyUp={handleUpdate}
          type="text"
          className="w-full mb-4 p-2 border border-gray-100  rounded focus:outline-none"
        />
        <textarea
          className="w-full mb-4 p-2 border border-gray-100  rounded focus:outline-none"
          rows={6}
          value={description}
          onChange={(e) => setContent(e.target.value)}
          onKeyUp={handleUpdate}
        ></textarea>
        <div className="flex justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleGoBack}
          >
            Go Back
          </button>
          <button
            className=" bg-red-600 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handledelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
