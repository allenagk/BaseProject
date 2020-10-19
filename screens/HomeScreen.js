import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../constants/colors";

const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('FindLocation', { name: 'Jane' })
        }
      />
    );
  };

  export default HomeScreen;