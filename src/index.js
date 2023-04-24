import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const Weather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
      </View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
