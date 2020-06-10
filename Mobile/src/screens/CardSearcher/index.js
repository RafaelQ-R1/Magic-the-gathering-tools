/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

import {
  View,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import { useSelector } from "react-redux";
import api from "../../services/api";

import {
  TouchableButton,
  Text,
  Container,
} from "../../components/StyledComponents";

import styles from "./styles";

export default function CardSearcher() {
  const image = useSelector((state) => state.changeImage.CurrentImage);

  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const [manaCost, setManaCost] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [cardImage, setCardImage] = useState();

  const findCard = async () => {
    try {
      if (!card) {
        alert("Card field in blank");
      }

      await api.post("/find", { card }).then((result) => {
        const Card = result.data;

        if (!Card) {
          ("Card not found");
          return;
        }
        setName(Card.name);
        setManaCost(Card.manaCost);
        setType(Card.type);
        setText(Card.text);
        setCardImage(Card.imageUrl);
      });
    } catch (err) {
      alert("error:", err);
    }
  };

  return (
    <>
      <Container>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: "100%" }}
        >
          <KeyboardAvoidingView>
            <View style={styles.search}>
              <TextInput
                placeholder="Write the card that you want to found"
                value={card}
                onChangeText={(card) => setCard(card)}
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              />
              <TouchableOpacity onPress={findCard}>
                <TouchableButton
                  borderWidth={2}
                  borderRadius={4}
                  color="blue"
                  onPress={findCard}
                  style={{
                    marginLeft: 5,
                    marginRight: 8,
                  }}
                >
                  <Text>Search</Text>
                </TouchableButton>
              </TouchableOpacity>
            </View>
            <Animatable.View
              animation="lightSpeedIn"
              duration={1500}
              style={styles.mainView}
            >
              <View style={styles.description}>
                <View style={styles.cardDescription}>
                  <Text
                    value={name}
                    style={{
                      borderColor: "black",
                      borderBottomWidth: 2,
                      borderRadius: 5,
                      height: 8,
                      width: 130,
                    }}
                  >
                    {name}
                  </Text>
                  <Text>Name</Text>
                </View>

                <View style={styles.cardDescription}>
                  <Text
                    value={manaCost}
                    style={{
                      borderColor: "black",
                      borderBottomWidth: 2,
                      borderRadius: 5,
                      height: 8,
                      width: 130,
                    }}
                  >
                    {manaCost}
                  </Text>

                  <Text>Mana cost</Text>
                </View>

                <View style={styles.cardDescription}>
                  <Text
                    value={type}
                    style={{
                      borderColor: "black",
                      borderBottomWidth: 2,
                      borderRadius: 5,
                      height: 8,
                      width: 130,
                    }}
                  >
                    {type}
                  </Text>
                  <Text>Type</Text>
                </View>

                <View style={styles.cardDescription}>
                  <Text
                    value={text}
                    fontSize={9}
                    style={{
                      borderColor: "black",
                      borderBottomWidth: 2,
                      borderRadius: 5,
                      height: 8,
                      width: 130,
                    }}
                  >
                    {text}
                  </Text>
                  <Text>Effect</Text>
                </View>

                <View style={styles.cardImage}>
                  <Image
                    source={{ uri: cardImage }}
                    height={70}
                    width={70}
                    style={{
                      borderColor: "black",
                      borderWidth: 1,
                      height: 240,
                      width: 180,
                    }}
                  />
                </View>
              </View>
            </Animatable.View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Container>
    </>
  );
}
