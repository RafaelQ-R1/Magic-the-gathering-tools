/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React from "react";

import { registerCustomIconType, Icon } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "./screens/Home";
import Dices from "./screens/Dices";
import Statistics from "./screens/Statistics";
import CardSearcher from "./screens/CardSearcher";
import Settings from "./screens/Settings";

registerCustomIconType("font-awesome-5", FontAwesome5);

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#ff8c00"
        inactiveColor="#f5f5dc"
        barStyle={{
          backgroundColor: "#000000",
          height: 50,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, type }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              type = "font-awesome";
              color = "blue";
            } else if (route.name === "Roll Dices") {
              iconName = "dice-d20";
              type = "font-awesome-5";
              color = "red";
            } else if (route.name === "Statistics") {
              iconName = "pie-chart";
              type = "font-awesome";
              color = "green";
            } else if (route.name === "Card Searcher") {
              iconName = "search";
              color = "orangered";
              type = "font-awesome";
            } else if (route.name === "Settings") {
              iconName = "gears";
              type = "font-awesome";
              color = "gray";
            }

            return <Icon name={iconName} size={20} type={type} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Roll Dices" component={Dices} />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="Card Searcher" component={CardSearcher} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
