import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./Home";
import { FullPostScreen } from "./FullPost";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={Home}
          options={{ title: "List" }}
        />
        <Stack.Screen
          name="Photo"
          component={FullPostScreen}
          options={{ title: "Photo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
