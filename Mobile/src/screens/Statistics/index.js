/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import React, { useState } from "react";
import {
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { PieChart } from "react-native-chart-kit";

import { useSelector } from "react-redux";

import {
  TouchableButton,
  Container,
  Text,
} from "../../components/StyledComponents";

export default function Statistics() {
  const image = useSelector((state) => state.changeImage.CurrentImage);
  const screenWidth = Dimensions.get("window").width - 16;
  const screenHeight = Dimensions.get("window").height - 200;
  const [victory, setVictory] = useState(0);
  const [lose, setLose] = useState(0);
  const [draw, setDraw] = useState(0);

  const showResults = async () => {
    let value1 = parseInt(await AsyncStorage.getItem("@Victory"), 10);
    if (!value1) value1 = 0;
    let value2 = parseInt(await AsyncStorage.getItem("@Draw"), 10);
    if (!value2) value2 = 0;

    let value3 = parseInt(await AsyncStorage.getItem("@Lose"), 10);
    if (!value3) value3 = 0;

    if (!value1 && !value2 && !value3)
      return alert("There's no matches registered yet");

    const numberOfMatches = (await value1) + value2 + value3;

    const percentageOfWins = () => {
      return (value1 * 100) / numberOfMatches;
    };
    const percentageOfDraws = () => {
      return (value2 * 100) / numberOfMatches;
    };
    const percentageOfLoses = () => {
      return (value3 * 100) / numberOfMatches;
    };

    await setVictory(percentageOfWins);
    await setDraw(percentageOfDraws);
    await setLose(percentageOfLoses);
  };

  return (
    <>
      <Container>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Statistics</Text>

            <PieChart
              data={[
                {
                  name: "Victories",
                  population: victory,
                  color: "#006400",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15,
                },
                {
                  name: "Loses",
                  population: lose,
                  color: "#F00",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15,
                },
                {
                  name: "Draws",
                  population: draw,
                  color: "#1e90ff",
                  legendFontColor: "#7F7F7F",
                  legendFontSize: 15,
                },
              ]}
              width={screenWidth}
              height={screenHeight}
              chartConfig={{
                backgroundColor: "#1cc910",
                backgroundGradientFrom: "#eff3ff",
                backgroundGradientTo: "#efefef",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
            />
            <TouchableOpacity onPress={showResults}>
              <TouchableButton
                borderWidth={2}
                borderRadius={4}
                width={100}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>Show</Text>
              </TouchableButton>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Container>
    </>
  );
}
