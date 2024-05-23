import React, { useContext } from "react";

import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/Button";
import AppContext from "../Context/AppContext";
import AddButton from "../components/AddButton";
import TrashButton from "../components/TrashButton";
import Navbar from "../components/Navbar";
const NoteCard = ({ item, deleteNotes, editItem }) => {
  const handleDelete = () => {
    deleteNotes(item.id);
  };
  const handleEdit = () => {
    editItem(item.id);
  };
  return (
    <TouchableOpacity style={styles.card} onPress={handleEdit}>
      <View style={styles.cardTop}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <TrashButton onPress={handleDelete} />
      </View>
      <Text>{item.desc}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const { noteList, setPage, handleDelete, handleEdit } =
    useContext(AppContext);
  return (
    <View style={styles.container}>
      <Navbar />
      <FlatList
        style={styles.itemList}
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({ item }) => (
          <NoteCard
            item={item}
            deleteNotes={handleDelete}
            editItem={handleEdit}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <AddButton onAddPress={() => setPage("add")} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: { paddingHorizontal: 20 },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

    paddingTop: 32,
    position: "relative",
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 5,
  },
  cardTop: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Home;
