import React from "react";
import { TextInput } from "react-native";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Montpellier",
    };
  }

  setCity(city) {
    this.setState({ city });
  }

  render() {
    return (
      <TextInput
        underlineColorAndroid="transparent" //suportée uniquement par android
        onChangeText={(text) => this.setCity(text)}
        style={{
          height: 400,
          borderColor: "gray",
          borderWidth: 1,
          marginHorizontal: 40,
        }}
        value={this.state.city}
      />
    );
  }
}

export default Home;
