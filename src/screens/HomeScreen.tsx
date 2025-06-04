import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/color";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.tertiary, COLORS.fifth]}
      style={styles.container}
    >
      <View style={styles.circleTopLeft} />
      <View style={styles.circleBottomRight} />

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Mükemmel bir CV inşa edin :)</Text>
          <Text style={styles.subTitle}>
            Kullanımı kolay şablonlarımızla dakikalar içinde profesyonel bir
            özgeçmiş oluşturun
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Ionicons name="document-text-outline" size={80} color="#fff" />
        </View>

        <TouchableOpacity
          style={styles.createButton}
          onPress={() =>
            navigation.navigate("TemplateStack", { screen: "Template" })
          }
        >
          <LinearGradient
            style={styles.createButtonLinearGradient}
            colors={[COLORS.buttonPrimary, COLORS.buttonSecondary]}
          >
            <Ionicons
              name="add"
              size={30}
              color="#fff"
              style={styles.createButtonIcon}
            />
            <Text style={styles.createButtonText}>Şablon Oluştur</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.manuelCreateButton}>
          <Text style={styles.manuelCreateButtonText}>
            Veya kendiniz oluşturun
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circleTopLeft: {
    position: "absolute",
    width: 200,
    height: 200,
    top: -50,
    left: -50,
    borderRadius: 100,
    backgroundColor: COLORS.shadow,
  },
  circleBottomRight: {
    position: "absolute",
    width: 150,
    height: 150,
    bottom: -30,
    right: -30,
    borderRadius: 75,
    backgroundColor: COLORS.shadow,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subTitle: {
    fontSize: 17,
    color: COLORS.light,
    lineHeight: 24,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 10,
  },
  createButtonLinearGradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 23,
  },
  createButton: {
    overflow: "hidden",
    marginVertical: 15,
    borderRadius: 14,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 10,
    shadowOpacity: 0.3,
  },
  createButtonIcon: {
    right: 8,
  },
  createButtonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  manuelCreateButton: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  manuelCreateButtonText: {
    fontSize: 16,
    color: COLORS.light,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default HomeScreen;
