import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigation;
