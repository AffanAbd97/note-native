import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import CustomButton from "../components/Button";
import AppContext from "../Context/AppContext";
import NavbarBack from "../components/NavbarBack";

function Add() {
  const { setPage, handleAddNotes } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false); 

  const handleSubmit = () => {
    if (title === "" || desc === "") {
      setError(true);
    } else {
      handleAddNotes(title, desc);
      setPage("home");
      setError(false);
    }
  };

  return (
    <View style={styles.container}>
      <NavbarBack text={"Tambahkan Note"} onPress={() => setPage("home")} />
      <View style={styles.inputWrapper}>
        <Input
          label={"Judul"}
          text={title}
          onChange={setTitle}
          numberOfLines={1}
          multiline={false}
        />
        {error && title === "" && (
          <Text style={styles.errorText}>Masukkan Judul</Text>
        )}
        <Input
          label={"Deskripsi"}
          text={desc}
          onChange={setDesc}
          multiline
          numberOfLines={4}
        />
        {error && desc === "" && (
          <Text style={styles.errorText}>Masukkan Deskripsi</Text>
        )}
        <View style={styles.spacerTop}>
          <CustomButton
            bgColor={"#222"}
            color={"#FFC300"}
            text={"Simpan"}
            width={"100%"}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 32,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputWrapper: {
    paddingHorizontal: 20,
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
  errorText: {
    color: "red",
    marginTop: 5,
  },
});

export default Add;
