import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import About from "./components/About";
import Home from "./components/Search";

export default function App() {
  return (
    <View style={{ marginVertical: 40 }}>
      <Home />
    </View>
  );
}
