import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Сиди дома",
    subtitle: "Ты видишь что на улице?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3A7BD5", "#3A6073"],
    title: "Возьми зонтик",
    subtitle: "Возможно скоро дождь усилится",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "На улице дождь",
    subtitle: "А значит скоро будет радуга!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83A4D4", "#B6FBFF"],
    title: "На улице снежок!",
    subtitle: "Одевайся потеплее, лепи снеговиков",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606C88", "#3F4C6B"],
    title: "Ни черта не видно в тумане",
    subtitle: "Зато как в Сайлент-Хилле :)",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "На улице смог :(",
    subtitle: "Не советую выходить без необходимости",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "На улице смог :(",
    subtitle: "Не советую выходить без необходимости",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "На улице смог :(",
    subtitle: "Не советую выходить без необходимости",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "На улице смог :(",
    subtitle: "Не советую выходить без необходимости",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "На улице смог :(",
    subtitle: "Не советую выходить без необходимости",
  },
  Haze: {
    iconName: "weather-haze",
    gradient: ["#56CCF2", "#DECBA4"],
    title: "На улице снежок!",
    subtitle: "Одевайся потеплее, лепи снеговиков",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Пыльно",
    subtitle: "Лучше закрой окна",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#606C88", "#3F4C6B"],
    title: "Торнадо!!!",
    subtitle: "Лучше спустись в подвал!",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Погода супер :)",
    subtitle: "Иди гулять, хватит сидеть дома",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Облака",
    subtitle: "Белогривые лошадки",
  },
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{Math.round(temp)}°</Text>
        <Text style={styles.city}>{name}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textcontainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textcontainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  city: {
    fontSize: 32,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textcontainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
