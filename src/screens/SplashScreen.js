import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3500);
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="orange" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
  },
});

export default SplashScreen;
