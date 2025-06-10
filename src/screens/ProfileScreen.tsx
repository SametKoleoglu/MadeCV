import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/color";
import { PROFILESECTIONS } from "../constants/profile";
import SectionCard from "../components/profile/sectionCard";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.tertiary, COLORS.fifth]}
      style={{ flex: 1, paddingTop: StatusBar.currentHeight || 40 }}
    >
      <View>
        <StatusBar barStyle={"light-content"} backgroundColor={COLORS.light} />
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://randomuser.me/api/portraits/women/60.jpg" }}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.title}>Job Title</Text>
          </View>
        </View>

        <FlatList
          data={PROFILESECTIONS}
          renderItem={({ item, index }) => (
            <SectionCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    padding: 30,
    paddingTop: StatusBar.currentHeight || 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  headerTextContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#007aff",
  },
  name: {
    fontSize: 27,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.success,
    fontStyle: "italic",
  },
  list: {
    padding: 15,
  },
});

export default ProfileScreen;
