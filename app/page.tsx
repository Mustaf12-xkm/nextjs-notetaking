import React from "react";
import Notelist from "./components/notecard/notelist";
import FormDialog from "./components/AddNote/addnote";

function page() {
  return (
    <div>
      <Notelist />
      <FormDialog />
    </div>
  );
}

export default page;
