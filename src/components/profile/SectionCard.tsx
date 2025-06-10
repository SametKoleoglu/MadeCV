import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Section } from "../../types";
import { COLORS } from "../../constants/color";
import { PROFILESECTIONS } from "../../constants/profile";

const SectionCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <View>
      <TouchableOpacity style={styles.section}>
        <Ionicons name={item.icon} size={23} color={"#007AFF"} />
        <Text style={styles.sectionTitle}>{item?.title}</Text>
        <Ionicons name="chevron-forward" size={23} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  tickIcon: {
    marginLeft: 10,
  },
});

export default SectionCard;
