"use client";
import React from "react";
import Notecard from "./notecard";
import { useSelector } from "react-redux";

function notelist() {
  const { notes } = useSelector((state: any) => state.data);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {notes?.map((note: any) => (
          <Notecard
            key={note.id}
            description={note.description}
            title={note.title}
            date={note.date}
            id={note.id}
          />
        ))}
      </div>
    </div>
  );
}

export default notelist;
