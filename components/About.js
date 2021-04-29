import React from "react";
import { Text, View, StyleSheet } from "react-native";

const About = () => {
  return (
    // ici j'écris du JSX
    <View style={style.view}>
      <Text /*style={{ fontSize: 22, marginBottom: 20 }} */>
        A propos de moi
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus
        quas quae numquam aspernatur similique in, tempora repellat amet sit
        nihil nobis neque iste id ut fugit ea, cumque harum!
      </Text>
    </View>
  );
};

export default About;

const style = StyleSheet.create({
  view: {
    margin: 40,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
