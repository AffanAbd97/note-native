import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "./components/Button";
import Input from "./components/Input";
import Home from "./screens/Home";
import Add from "./screens/Add";
import Edit from "./screens/Edit";

const INITIAL_NOTES = [
  {
    id: 1,
    title: "Note pertama",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

const HandleChangePage = ({
  page,
  setPage,
  noteList,
  addNotes,
  deleteNotes,
  editItem,
  editData,
  saveUpdate
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
      return <Edit initialData={editData} setPage={setPage} saveUpdate={saveUpdate}/>;
    case "add":
      return <Add setPage={setPage} addNotes={addNotes} />;

    default:
      break;
  }
};

function App() {
  const [page, setPage] = useState("home");
  const [editData, setEditData] = useState(null);
  let initialData = [...INITIAL_NOTES];
  const [noteList, setnoteList] = useState(initialData);

  const handleEdit = (id) => {
    const data = noteList.find((item) => item.id == id);
    if (data) {
      setEditData(data);
      setPage("edit");
    }
  };
  const handleSaveEdit = (id, title, desc) => {
    const data = noteList.find((item) => item.id == id);
    if (data) {
      data.title = title;
      data.desc = desc;
    }
  };

  const handleAddNotes = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setnoteList([
      ...noteList,
      {
        id: id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const handleDelete = (id) => {
    const newList = noteList.filter((item) => item.id !== id);
    setnoteList(newList);
  };
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

export default App;
