import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigations/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
