import React, { useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";

import * as Animatable from "react-native-animatable";
import { CheckBox } from "react-native-elements";

import { useSelector } from "react-redux";
import {
  TouchableButton,
  Container,
  Text,
} from "../../components/StyledComponents";

import diceValues from "./dicesValues";

import D6 from "../../assets/d6.svg";
import D10 from "../../assets/d10.svg";
import D12 from "../../assets/d12.svg";
import D20 from "../../assets/d20.svg";

import styles from "./styles";

export default function RollDices() {
  const image = useSelector((state) => state.changeImage.CurrentImage);

  const [total, setTotal] = useState(true);
  const [d6Value, setD6] = useState(false);
  const [d10Value, setD10] = useState(false);
  const [d12Value, setD12] = useState(false);
  const [d20Value, setD20] = useState(false);

  const d6Pressed = () => {
    setD6(true);
    setD10(false);
    setD12(false);
    setD20(false);
  };

  const d10Pressed = () => {
    setD6(false);
    setD10(true);
    setD12(false);
    setD20(false);
  };
  const d12Pressed = () => {
    setD6(false);
    setD10(false);
    setD12(true);
    setD20(false);
  };
  const d20Pressed = () => {
    setD6(false);
    setD10(false);
    setD12(false);
    setD20(true);
  };

  const rollDice = async () => {
    let result = "";
    if (d6Value) {
      result = await diceValues.d6[
        Math.floor(Math.random() * diceValues.d6.length)
      ];
      await setTotal(total);
    } else if (d10Value) {
      result = await diceValues.d10[
        Math.floor(Math.random() * diceValues.d10.length)
      ];
      await setTotal(result);
    } else if (d12Value) {
      result = await diceValues.d12[
        Math.floor(Math.random() * diceValues.d12.length)
      ];
      await setTotal(result);
    } else if (d20Value) {
      result = await diceValues.d20[
        Math.floor(Math.random() * diceValues.d20.length)
      ];
      await setTotal(result);
    }
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
              margin: "5%",
            }}
          >
            <Animatable.Text
              animation="slideInDown"
              iterationCount={5}
              direction="alternate"
            >
              Choose Dice
            </Animatable.Text>
          </View>

          <View style={styles.Dices}>
            <Animatable.View
              animation="bounceInDown"
              duration={1000}
              style={styles.uniqueDice}
            >
              <D6 width={40} height={40} />
              <Text>D6</Text>
              <CheckBox
                size={20}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={d6Value}
                onPress={d6Pressed}
              />
            </Animatable.View>

            <Animatable.View
              animation="bounceInDown"
              duration={2000}
              style={styles.uniqueDice}
            >
              <D10 width={40} height={40} />
              <Text>D10</Text>
              <CheckBox
                size={20}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={d10Value}
                onPress={d10Pressed}
              />
            </Animatable.View>

            <Animatable.View
              animation="bounceInDown"
              duration={3000}
              style={styles.uniqueDice}
            >
              <D12 width={40} height={40} />

              <Text>D12</Text>
              <CheckBox
                size={20}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={d12Value}
                onPress={d12Pressed}
              />
            </Animatable.View>

            <Animatable.View
              animation="bounceInDown"
              duration={4000}
              style={styles.uniqueDice}
            >
              <D20 width={40} height={40} />
              <Text>D20</Text>
              <CheckBox
                size={20}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={d20Value}
                onPress={d20Pressed}
              />
            </Animatable.View>
          </View>

          <View style={styles.rollDice}>
            <Text fontSize={50}>{total}</Text>
            <TouchableOpacity onPress={rollDice}>
              <TouchableButton
                marginTop={15}
                borderRadius={4}
                height={40}
                width={90}
                color="gray"
                style={{
                  marginRight: 5,
                }}
              >
                <Text>Roll dice</Text>
              </TouchableButton>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Container>
    </>
  );
}
