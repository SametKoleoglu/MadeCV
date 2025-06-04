import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TemplateScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const TemplateStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Template" component={TemplateScreen} />
    </Stack.Navigator>
  );
};

export default TemplateStackNavigation;
