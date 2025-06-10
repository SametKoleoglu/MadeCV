import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";

import { TEMPLATES } from "../constants/template";
import { COLORS } from "../constants/color";
import { Template } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

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
            <Text style={styles.sectionTitle}>Profil</Text>
            <Text style={styles.description}>
              Deneyimli ve profesyonel yazılım mühendisi
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deneyim</Text>
            <Text style={styles.date}>2013-şimdi</Text>
            <Text style={styles.subtitle}>Expert Yazılım Mühendisi</Text>
            <Text style={styles.subText}>yaratıcı zihinler ajansı</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Eğitim</Text>
            <Text style={styles.date}>2009 - 2013</Text>
            <Text style={styles.subtitle}>Lisans Doktora</Text>
            <Text style={styles.subText}>Yıldız Teknik Universitesi</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sertifikalar</Text>
            <Text style={styles.subText}>Python 401</Text>
            <Text style={styles.subText}>Java Script 601</Text>
            <Text style={styles.subText}>Design Pattern</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projeler</Text>
            <Text style={styles.subtitle}>
              React Native ile uygulama gelştirme
            </Text>
            <Text style={styles.subText}>
              Fullstack Node JS ile uygulama gelştirme
            </Text>
            <Text style={styles.subText}>
              2023-2024 Kodluyoruz Mobile Bootcamp
            </Text>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Yetenekler</Text>
            <Text style={styles.skill}>React Native</Text>
            <Text style={styles.skill}>Node JS</Text>
            <Text style={styles.skill}>Fullstack</Text>
            <Text style={styles.skill}>Design Pattern</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Diller</Text>
            <Text>Ingilizce</Text>
            <Text>Turkce</Text>
            <Text>Almanca</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ödüller</Text>
            <Text numberOfLines={3} style={styles.subtitle}>
              2023-2024 Kodluyoruz Mobile Bootcamp
            </Text>
            <Text style={styles.subText}>
              2023-2024 Kodluyoruz Fullstack Bootcamp
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hobiler</Text>
            <Text>Yazılım</Text>
            <Text>Kitap Okumak</Text>
            <Text>Fotoğraf Çekmek</Text>
            <Text>Fitness</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>References</Text>
            <Text style={styles.subtitle}>Daniel Klein</Text>
            <Text style={styles.subText}>Electric Electronics Engineer</Text>
            <Text style={styles.subText}>danielk@example.com</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>İletişim</Text>
            <Text style={styles.contactText}>Phone +90 555 555 55 55</Text>
            <Text style={styles.contactText}>Email: 8tYyS@example.com</Text>
          </View>
        </View>
      </View>
    </View>

    <TouchableOpacity style={styles.useButton}>
      <Text style={styles.useButtonText}>Use this  template</Text>
    </TouchableOpacity>
  </View>
);

const TemplateScreen = ({ navigation }: { navigation: any }) => {
  return (
    <LinearGradient style={styles.container} colors={[COLORS.primary, COLORS.tertiary, COLORS.fifth]}>
      <SafeAreaView>
        <FlatList
          data={TEMPLATES}
          renderItem={renderTemplate}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  templateContainer: {
    overflow: "hidden",
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
    padding: 10,
    gap:20
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
  columnsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  leftColumn: {
    flex: 1,
    minWidth: 150,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 17,
    color: COLORS.dark,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#007AFF",
    paddingBottom: 3,
  },
  description: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  date: {
    fontSize: 12,
    color: "#666",
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.dark,
  },
  subText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 3,
  },
  rightColumn: {
    flex: 1,
    minWidth: 150,
  },
  skill: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },
  contactText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },
  useButton: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  useButtonText: {
    color: COLORS.light,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TemplateScreen;
