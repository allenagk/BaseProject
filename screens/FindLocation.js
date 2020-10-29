import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../constants/colors";



const FindLocation = ({ navigation }) => {
  console.log(navigation);
    return (
        <View style={styles.screen}>
        <Text>FindLocation</Text>
        <Button title="Click me" onPress={() => navigation.navigate('Detail')}></Button>

      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.backgrnd,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default FindLocation;
