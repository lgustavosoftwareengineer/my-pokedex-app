import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialIcons as Icon } from "@expo/vector-icons/";

import { theme } from "../../theme";

import SearchPokemon from "../SearchPokemon";
import MyPokemons from "../MyPokemons";
import MyFavorites from "../MyFavorites";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 0,
          backgroundColor: theme.colors.red,
        },
        tabStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          marginTop: 6,
          fontSize: 13,
        },
        activeTintColor: theme.colors.strongWhite,
        inactiveTintColor: theme.colors.black,
      }}
    >
      <Tab.Screen
        name="home"
        component={MyFavorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="favorite"
                size={size}
                color={focused ? theme.colors.strongWhite : theme.colors.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchPokemon}
        options={{
          tabBarLabel: "Pesquisar",
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="search"
                size={size}
                color={focused ? theme.colors.strongWhite : theme.colors.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="my-pokemons"
        component={MyPokemons}
        options={{
          tabBarLabel: "Meus pokemons",

          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="collections-bookmark"
                size={size}
                color={focused ? theme.colors.strongWhite : theme.colors.black}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
