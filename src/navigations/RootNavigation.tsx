import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// LOCALE DEFINITIONS
import HomeStackNavigation from "./Stack/HomeStackNavigation";
import TemplateStackNavigation from "./Stack/TemplateStackNavigation";
import ProfileStackNavigation from "./Stack/ProfileStackNavigation";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TemplateStack") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "ProfileStack") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <Ionicons name={iconName!! as any} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#673ab7",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#f8f8f8",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStackNavigation as any} />
      <Tab.Screen
        name="TemplateStack"
        component={TemplateStackNavigation as any}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigation as any}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
