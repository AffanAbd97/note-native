import React from "react";

import { FlatList, StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/Button";
const NoteCard = ({ item, setPage, deleteNotes, editItem }) => {
  const handleDelete = () => {
    deleteNotes(item.id);
  };
  const handleEdit = () => {
    editItem(item.id);
    // setPage("edit");
  };
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.buttons}>
        <CustomButton
          bgColor="#FFC300"
          color="#151D3B"
          text="Ubah"
          fontSize={12}
          width={100}
          onPress={handleEdit}
        />
        <CustomButton
          bgColor="#D82148"
          color="#fff"
          text="Hapus"
          fontSize={12}
          width={100}
          onPress={handleDelete}
        />
      </View>
    </View>
  );
};

const Home = ({ noteList, setPage, deleteNotes, editItem }) => (
  <View style={styles.container}>
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      onPress={() => setPage("add")}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard
          item={item}
          setPage={setPage}
          deleteNotes={deleteNotes}
          editItem={editItem}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 5,
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
