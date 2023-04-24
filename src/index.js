import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Constants } from "expo-constants";

const API_KEYS = "dd42ed0c9fd2d490e96487736f09ed02";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // add a function to fetch the weather data
  const fetchWeather = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`
      );
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
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
    backgroundColor: "#FCF5DB",
    width: "100%",
    //paddingTop: Constants.statusBarHeight,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#C5D2EF",
    height: 80,
    justifyContent: "center",
  },
  headerTitle: {
    paddingTop: 20,
    fontSize: 29,
    fontWeight: "bold",
  },
});
