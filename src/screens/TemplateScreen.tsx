import { View, Text, FlatList, StyleSheet, Image } from "react-native";

import { TEMPLATES } from "../constants/template";
import { COLORS } from "../constants/color";
import { Template } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";

const renderTemplate = ({ item }: { item: Template }) => (
  <View style={[styles.templateContainer, { backgroundColor: item.color }]}>
    <View style={styles.template}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>Enes</Text>
          <Text style={styles.jobTitle}>Yazılım Mühendisi</Text>
          <Text style={styles.about}>
            {" "}
            Enes, profesyonel bir yazılım mühendisidir.{" "}
          </Text>
        </View>
      </View>

      <View style={styles.columnsContainer}>
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Profil
            </Text>
            <Text style={styles.description}>Deneyimli ve profesyonel yazılım mühendisi</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deneyim</Text>
            <Text style={styles.date}>2013-şimdi</Text>
            <Text style={styles.subTitle}>Expert Yazılım Mühendisi</Text>
            <Text style={styles.subText}>yaratıcı zihinler ajansı</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Eğitim</Text>
            <Text style={styles.date}>2009 - 2013</Text>
            <Text style={styles.subTitle}>Lisans Doktora</Text>
            <Text style={styles.subText}>Yıldız Teknik Universitesi</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sertifikalar</Text>
            <Text>Python 401</Text>
            <Text>Java Script 601</Text>
            <Text>Design Pattern</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projeler</Text>
            <Text>React Native ile uygulama gelştirme</Text>
            <Text>Fullstack Node JS ile uygulama gelştirme</Text>
            <Text>2023-2024 Kodluyoruz Mobile Bootcamp</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const TemplateScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={TEMPLATES}
        renderItem={renderTemplate}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  templateContainer: {
    overflow: "hidden",
    marginBottom: 20,
    borderRadius: 10,
  },
  template: {
    padding: 15,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTextContainer: {
    alignItems: "center",
  },
  list: {
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#007aff",
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
    color: COLORS.dark,
    textAlign: "center",
  },
  jobTitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 5,
  },
  about: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    lineHeight: 20,
  },
  columnsContainer:{

  }
});

export default TemplateScreen;
