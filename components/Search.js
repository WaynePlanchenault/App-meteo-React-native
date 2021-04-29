import React from "react";
import { TextInput } from "react-native";

const Home = () => {
  return (
    <TextInput
      underlineColorAndroid="transparent" //suportée uniquement par android
      style={{ height: 400, borderColor: "gray", borderWidth: 1 }}
    />
  );
};

export default Home;
