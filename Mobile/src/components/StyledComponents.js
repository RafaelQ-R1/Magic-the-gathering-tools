import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled(LinearGradient).attrs({
  colors: ["#483d8b", "#8a2be2"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const TouchableButton = styled(LinearGradient).attrs({
  colors: ["#006400", "#008000", "#7cfc00"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  height: ${(props) => props.height || 40};
  width: ${(props) => props.width || 100};
  border-radius: ${(props) => props.borderRadius || 25};
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || "0%"};
  border-width: ${(props) => props.borderWidth || 0};
  border-color: ${(props) => props.borderColor || "transparent"};
  margin-top: ${(props) => props.marginTop || "0%"};
`;

export const CircularButton = styled.TouchableOpacity`
  height: ${(props) => props.height || 40};
  width: ${(props) => props.width || 100};
  background-color: ${(props) => props.color || "red"};
  border-radius: ${(props) => props.borderRadius || 25};
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || "0%"};
  border-width: ${(props) => props.borderWidth || 1};
  border-color: ${(props) => props.borderColor || "#a9a9a9"};
  margin-top: ${(props) => props.marginTop || "0%"};
`;

export const Text = styled.Text`
  font-size: ${(props) => props.fontSize || 15};
  margin: ${(props) => props.margin || "2%"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: ${(props) => props.Color || "black"};

 }

`;
