/* eslint-disable no-undef */
import React, { useState } from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";

import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-community/async-storage";

import { useSelector } from "react-redux";

import Dialog from "../../components/dialog";

import {
  TouchableButton,
  CircularButton,
  Text,
  Container,
} from "../../components/StyledComponents";

import Plains from "../../assets/plains.svg";
import Swamp from "../../assets/Swamp.svg";
import Mountain from "../../assets/Mountain.svg";
import Island from "../../assets/Island.svg";
import Forest from "../../assets/Forest.svg";
import Colorless from "../../assets/Colorless.svg";
import Poison from "../../assets/Poison.svg";

import styles from "./styles";

export const main = () => {
  const image = useSelector((state) => state.changeImage.CurrentImage);

  const [hpPlayer1, setHpPlayer1] = useState(20);
  const [whiteMana1, setWhiteMana1] = useState(0);
  const [blackMana1, setblackMana1] = useState(0);
  const [blueMana1, setblueMana1] = useState(0);
  const [redMana1, setredMana1] = useState(0);
  const [greenMana1, setgreenMana1] = useState(0);
  const [colorlessMana1, setcolorlessMana1] = useState(0);
  const [poisonCounter1, setPoisonCounter1] = useState(0);
  const [whiteMana2, setWhiteMana2] = useState(0);
  const [blackMana2, setblackMana2] = useState(0);
  const [blueMana2, setblueMana2] = useState(0);
  const [redMana2, setredMana2] = useState(0);
  const [greenMana2, setgreenMana2] = useState(0);
  const [colorlessMana2, setcolorlessMana2] = useState(0);
  const [poisonCounter2, setPoisonCounter2] = useState(0);
  const [countersPlayer1, setCountersPlayer1] = useState(0);
  const [hpPlayer2, setHpPlayer2] = useState(20);
  const [countersPlayer2, setCountersPlayer2] = useState(0);
  const [Visible, setVisible] = useState(false);

  const stopCount = () => {
    setVisible(true);
  };

  const storeVictory = async () => {
    try {
      setVisible(false);
      const victory = parseInt(
        (await AsyncStorage.getItem("@Victory")) || "0",
        10
      );
      await AsyncStorage.setItem("@Victory", (victory + 1).toString());
    } catch (err) {
      alert(err);
    }
  };

  const storeDraw = async () => {
    try {
      setVisible(false);
      const draw = parseInt((await AsyncStorage.getItem("@Draw")) || "0", 10);
      await AsyncStorage.setItem("@Draw", (draw + 1).toString());
    } catch (err) {
      alert(err);
    }
  };

  const storeLose = async () => {
    try {
      setVisible(false);
      const lose = parseInt((await AsyncStorage.getItem("@Lose")) || "0", 10);
      await AsyncStorage.setItem("@Lose", (lose + 1).toString());
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Container>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: "100%" }}
        >
          <Dialog
            isVisible={Visible}
            bold
            Title="End of match"
            Description="What's the match result?"
            onClick1={storeVictory}
            onClick2={storeDraw}
            onClick3={storeLose}
            label1="Victory"
            label2="Draw"
            label3="Lose"
          />

          <View style={styles.center}>
            <Animatable.View
              animation="slideInLeft"
              duration={1500}
              style={styles.childCenter1}
            >
              <View style={styles.childOfchild}>
                <CircularButton
                  height={30}
                  width={30}
                  onPress={() => setHpPlayer1(hpPlayer1 - 1)}
                >
                  <Text>-</Text>
                </CircularButton>
                <Text>{hpPlayer1}</Text>

                <CircularButton
                  height={30}
                  width={30}
                  color="green"
                  onPress={() => setHpPlayer1(hpPlayer1 + 1)}
                >
                  <Text>+</Text>
                </CircularButton>

                <Text style={{ margin: "2%" }}>Life points</Text>
              </View>

              <View style={styles.childOfchild}>
                <CircularButton
                  height={30}
                  width={30}
                  onPress={() => setCountersPlayer1(countersPlayer1 - 1)}
                >
                  <Text>-</Text>
                </CircularButton>

                <Text style={{ margin: "2%" }}>{countersPlayer1}</Text>

                <CircularButton
                  height={30}
                  width={30}
                  color="green"
                  onPress={() => setCountersPlayer1(countersPlayer1 + 1)}
                >
                  <Text>+</Text>
                </CircularButton>

                <Text style={{ margin: "2%" }}>Number of markers</Text>
              </View>
            </Animatable.View>

            <Animatable.View
              animation="slideInRight"
              duration={1500}
              style={styles.childCenter2}
            >
              <View style={styles.childOfchild2}>
                <CircularButton
                  height={30}
                  width={30}
                  onPress={() => setHpPlayer2(hpPlayer2 - 1)}
                >
                  <Text>-</Text>
                </CircularButton>
                <Text style={{ margin: "2%" }}>{hpPlayer2}</Text>

                <CircularButton
                  height={30}
                  width={30}
                  color="green"
                  onPress={() => setHpPlayer2(hpPlayer2 + 1)}
                >
                  <Text>+</Text>
                </CircularButton>

                <Text style={{ margin: "2%" }}>Life points</Text>
              </View>
              <View style={styles.childOfchild2}>
                <CircularButton
                  height={30}
                  width={30}
                  onPress={() => setCountersPlayer2(countersPlayer2 - 1)}
                >
                  <Text>-</Text>
                </CircularButton>
                <Text style={{ margin: "2%" }}>{countersPlayer2}</Text>

                <CircularButton
                  height={30}
                  width={30}
                  color="green"
                  onPress={() => setCountersPlayer2(countersPlayer2 + 1)}
                >
                  <Text>+</Text>
                </CircularButton>

                <Text style={{ margin: "2%" }}>Number of markers</Text>
              </View>
            </Animatable.View>
          </View>

          <Animatable.View
            animation="slideInUp"
            duration={1500}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.columManas}>
                <Text>{whiteMana1}</Text>
                <Plains
                  width={25}
                  height={25}
                  onPress={() => setWhiteMana1(whiteMana1 + 1)}
                  onLongPress={() => setWhiteMana1(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{blueMana1}</Text>
                <Island
                  width={25}
                  height={25}
                  onPress={() => setblueMana1(blueMana1 + 1)}
                  onLongPress={() => setblueMana1(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{blackMana1}</Text>
                <Swamp
                  width={25}
                  height={25}
                  onPress={() => setblackMana1(blackMana1 + 1)}
                  onLongPress={() => setblackMana1(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{redMana1}</Text>
                <Mountain
                  width={25}
                  height={25}
                  onPress={() => setredMana1(redMana1 + 1)}
                  onLongPress={() => setredMana1(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{greenMana1}</Text>
                <Forest
                  width={25}
                  height={25}
                  onPress={() => setgreenMana1(greenMana1 + 1)}
                  onLongPress={() => setgreenMana1(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{colorlessMana1}</Text>
                <Colorless
                  width={25}
                  height={25}
                  onPress={() => setcolorlessMana1(colorlessMana1 + 1)}
                  onLongPress={() => setcolorlessMana1(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{poisonCounter1}</Text>
                <Poison
                  width={25}
                  height={25}
                  onPress={() => setPoisonCounter1(poisonCounter1 + 1)}
                  onLongPress={() => setPoisonCounter1(0)}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.columManas}>
                <Text>{whiteMana2}</Text>
                <Plains
                  width={25}
                  height={25}
                  onPress={() => setWhiteMana2(whiteMana2 + 1)}
                  onLongPress={() => setWhiteMana2(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{blueMana2}</Text>
                <Island
                  width={25}
                  height={25}
                  onPress={() => setblueMana2(blueMana2 + 1)}
                  onLongPress={() => setblueMana2(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{blackMana2}</Text>
                <Swamp
                  width={25}
                  height={25}
                  onPress={() => setblackMana2(blackMana2 + 1)}
                  onLongPress={() => setblackMana2(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{redMana2}</Text>
                <Mountain
                  width={25}
                  height={25}
                  onPress={() => setredMana2(redMana2 + 1)}
                  onLongPress={() => setredMana2(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{greenMana2}</Text>
                <Forest
                  width={25}
                  height={25}
                  onPress={() => setgreenMana2(greenMana2 + 1)}
                  onLongPress={() => setgreenMana2(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{colorlessMana2}</Text>
                <Colorless
                  width={25}
                  height={25}
                  onPress={() => setcolorlessMana2(colorlessMana2 + 1)}
                  onLongPress={() => setcolorlessMana2(0)}
                />
              </View>
              <View style={styles.columManas}>
                <Text>{poisonCounter2}</Text>
                <Poison
                  width={25}
                  height={25}
                  onPress={() => setPoisonCounter2(poisonCounter2 + 1)}
                  onLongPress={() => setPoisonCounter2(0)}
                />
              </View>
            </View>
          </Animatable.View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={stopCount}>
              <TouchableButton
                borderWidth={1}
                borderRadius={4}
                color="green"
                style={{
                  marginLeft: 5,
                }}
              >
                <Text>Mark Result</Text>
              </TouchableButton>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Container>
    </>
  );
};

export default main;
