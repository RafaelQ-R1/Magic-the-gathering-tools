/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Dialog from "react-native-dialog";

export default (props) => {
  return (
    <>
      <Dialog.Container visible={props.isVisible}>
        <Dialog.Title> {props.Title}</Dialog.Title>
        <Dialog.Description>{props.Description}</Dialog.Description>
        <Dialog.Button
          label={props.label1}
          onPress={() => props.onClick1(props.label1)}
        />
        <Dialog.Button
          label={props.label2}
          onPress={() => props.onClick2(props.label2)}
        />
        <Dialog.Button
          label={props.label3}
          onPress={() => props.onClick3(props.label3)}
        />
      </Dialog.Container>
    </>
  );
};
