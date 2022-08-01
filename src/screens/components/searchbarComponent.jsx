import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Searchbar = () => {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.searchbarComponentContainer}>
      <View style={styles.searchbarContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Busque tarea"
        />
        <View style={styles.logoContainer}>
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchbarComponentContainer: {
    //flex: 1,
    backgroundColor: "green",
    alignSelf: "stretch",
    //marginHorizontal: 20,
    marginBottom: 20,
  },
  searchbarContainer: {
    flexDirection: "row",
    //flex: 1,
    backgroundColor: "white",
    alignSelf: "stretch",
    marginHorizontal: 20,

    height: 40,
    //justifyContent: "flex-end"
  },
  input: {
    justifyContent: "flex-start",
    flex: 1,
  },
  logoContainer: {
    backgroundColor: "orange",
    justifyContent: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
