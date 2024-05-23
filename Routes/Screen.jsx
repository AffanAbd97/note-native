import React, { useContext } from "react";
import Home from "../screens/Home";
import Edit from "../screens/Edit";
import Add from "../screens/Add";
import AppContext from "../Context/AppContext";

const HandleChangePage = ({
  page,
  setPage,
  noteList,
  addNotes,
  deleteNotes,
  editItem,
  editData,
  saveUpdate,
}) => {
  switch (page) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setPage={setPage}
          deleteNotes={deleteNotes}
          editItem={editItem}
        />
      );
    case "edit":
      return (
        <Edit
          initialData={editData}
          setPage={setPage}
          saveUpdate={saveUpdate}
        />
      );
    case "add":
      return <Add setPage={setPage} addNotes={addNotes} />;

    default:
      break;
  }
};

function Screen() {
  const {
    page,
    setPage,
    editData,
    noteList,
    handleSaveEdit,
    handleEdit,
    handleAddNotes,
    handleDelete,
  } = useContext(AppContext);
  return (
    <HandleChangePage
      noteList={noteList}
      page={page}
      setPage={setPage}
      addNotes={handleAddNotes}
      deleteNotes={handleDelete}
      editItem={handleEdit}
      editData={editData}
      saveUpdate={handleSaveEdit}
    />
  );
}

export default Screen;
