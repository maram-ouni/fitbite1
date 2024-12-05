import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Addfood1 from "../screens/stack/Addfood1"; // Assurez-vous que le chemin est correct
import Addfood2 from "../screens/stack/Addfood2"; // Assurez-vous que le chemin est correct
import Addfood3 from "../screens/stack/Addfood3"; // Assurez-vous que le chemin est correct
import Addfood4 from "../screens/stack/Addfood4"; // Assurez-vous que le chemin est correct

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Addfood1">
      <Stack.Screen
        name="Addfood1"
        component={Addfood1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Addfood2"
        component={Addfood2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Addfood3"
        component={Addfood3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Addfood4"
        component={Addfood4}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
