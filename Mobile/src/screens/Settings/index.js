/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";

import ImagePicker from "react-native-image-picker";
import AsyncStorage from "@react-native-community/async-storage";

import { useDispatch, useSelector } from "react-redux";
import * as ImageActions from "../../store/actions/images";

import {
  TouchableButton,
  Container,
  Text,
} from "../../components/StyledComponents";
import Dialog from "../../components/dialog";
import styles from "./styles";

const menu = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.changeImage.CurrentImage);

  const [Visible, setVisible] = useState(false);
  const [photo, setPhoto] = useState();

  const showDialog = () => {
    setVisible(true);
  };

  const Cancel = () => {
    setVisible(false);
  };

  const cleanAllData = async () => {
    setVisible(false);
    await AsyncStorage.clear();
  };

  const handleChoosePhoto = async () => {
    const options = {};

    await ImagePicker.launchImageLibrary(options, (response) => {
      console.log("response", response);
      if (response.uri) {
        setPhoto(response);
      }
    });
  };
  useEffect(() => {
    dispatch(ImageActions.changeImage(photo));
  });

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
            }}
          >
            <Text>Settings:</Text>
          </View>

          <View style={styles.mainView}>
            <View style={styles.containerView}>
              <View style={styles.checkBoxView}>
                <View style={styles.rowView1}>
                  <Text fontSize={20}>Select background image:</Text>
                </View>
                <View style={styles.rowView2}>
                  <View style={styles.checkBox}>
                    <TouchableOpacity onPress={handleChoosePhoto}>
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
                        <Text>Select</Text>
                      </TouchableButton>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.containerView}>
              <View style={styles.checkBoxView}>
                <View style={styles.rowView1}>
                  <Text fontSize={20}>Clean data:</Text>
                </View>
                <View style={styles.rowView2}>
                  <View style={styles.checkBox}>
                    <TouchableOpacity onPress={showDialog}>
                      <TouchableButton
                        marginTop={15}
                        borderWidth={1}
                        height={40}
                        width={90}
                        borderRadius={4}
                        color="red"
                        style={{
                          marginRight: 5,
                        }}
                      >
                        <Text>Clean</Text>
                      </TouchableButton>
                    </TouchableOpacity>
                    <Dialog
                      isVisible={Visible}
                      Title="Clean matches register?"
                      Description="You really want to clean matches register
                      (this action can't be undone)?"
                      onClick1={cleanAllData}
                      onClick2={Cancel}
                      onClick3={Cancel}
                      label1="CONFIRM"
                      label2="CANCEL"
                      label3=""
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Container>
    </>
  );
};

export default menu;
