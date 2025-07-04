import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
