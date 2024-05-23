import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import CustomButton from "../components/Button";
import AppContext from "../Context/AppContext";

function Edit() {
  const {
    setPage,
    editData: initialData,
    handleSaveEdit: saveUpdate,
  } = useContext(AppContext);
  const [title, setTitle] = useState(initialData.title);
  const [desc, setDesc] = useState(initialData.desc);

  const handleSubmit = () => {
    saveUpdate(initialData.id, title, desc);
    setPage("home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan Note</Text>
      <Input
        label={"Judul"}
        text={title}
        onChange={setTitle}
        numberOfLines={1}
        multiline={false}
      />
      <Input
        label={"Deskripsi"}
        text={desc}
        onChange={setDesc}
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          bgColor={"#247881"}
          color={"#fff"}
          text={"Simpan"}
          width={"100%"}
          onPress={handleSubmit}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          bgColor={"#dddd"}
          text={"Kembali Ke Home"}
          width={"100%"}
          color="#203239"
          onPress={() => setPage("home")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default Edit;
