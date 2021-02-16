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
        activeTintColor: theme.colors.black,
        inactiveTintColor: theme.colors.strongWhite,
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
                color={focused ? theme.colors.black : theme.colors.strongWhite}
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
                color={focused ? theme.colors.black : theme.colors.strongWhite}
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
                color={focused ? theme.colors.black : theme.colors.strongWhite}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
