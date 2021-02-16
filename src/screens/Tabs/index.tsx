import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const DetailsScreen: React.FC = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

const ContactScreen: React.FC = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>ContactScreen</Text>
    </View>
  );
};

function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "home";

          if (route.name === "Home") {
          } else if (route.name === "Details") {
            iconName = "list";
          } else if (route.name === "Contact") {
            iconName = "call";
          }

          return <Ionicons name="home" size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;
