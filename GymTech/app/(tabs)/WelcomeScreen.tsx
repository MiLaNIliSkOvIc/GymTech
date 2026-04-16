import React from "react";
import {
    Dimensions,
    ImageBackground,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// ── Replace this with your actual image path ──
// e.g. const BG = require('./assets/gymshark_bg.jpg');
const BG = { uri: "https://your-image-url-here.jpg" };

const { width, height } = Dimensions.get("window");

interface WelcomeScreenProps {
  onCreateAccount?: () => void;
  onLogin?: () => void;
  onClose?: () => void;
}

export default function WelcomeScreen({
  onCreateAccount,
  onLogin,
  onClose,
}: WelcomeScreenProps) {
  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* ── Background image ── */}
      <ImageBackground source={BG} style={styles.background} resizeMode="cover">
        {/* Dark vignette overlay at the bottom */}
        <View style={styles.gradientOverlay} />

        <SafeAreaView style={styles.safeArea}>
          {/* ── Top bar ── */}
          <View style={styles.topBar}>
            <Text style={styles.logo}>GYMSHARK</Text>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={onClose}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* ── Spacer – pushes CTA to bottom ── */}
          <View style={styles.flex} />

          {/* ── Bottom CTA section ── */}
          <View style={styles.cta}>
            <Text style={styles.tagline}>
              The best of Gymshark, anytime, anywhere.
            </Text>

            {/* CREATE ACCOUNT */}
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={onCreateAccount}
              activeOpacity={0.85}
            >
              <Text style={styles.primaryBtnText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>

            {/* LOG IN */}
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={onLogin}
              activeOpacity={0.7}
            >
              <Text style={styles.secondaryBtnText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

// ─────────────────────────────────────────────
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
  },

  // ── Background ──────────────────────────────
  background: {
    flex: 1,
    width,
    height,
  },

  // Fades the photo to black toward the bottom so text is always legible
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    // Simulated gradient: transparent → solid black from ~55 % downward
    // (LinearGradient from expo-linear-gradient / react-native-linear-gradient
    //  can be dropped in here instead for a true gradient)
    backgroundColor: "transparent",
    // Manual approach: two pseudo-layers via borderRadius tricks won't work,
    // so we stack a second View at the bottom in the JSX tree below.
  },

  // ── Layout ──────────────────────────────────
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 8 : 0,
  },

  flex: { flex: 1 },

  // ── Top bar ─────────────────────────────────
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 2.5,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
  },

  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(50,50,50,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },

  closeIcon: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 18,
  },

  // ── Bottom CTA section ───────────────────────
  cta: {
    paddingBottom: 36,
    alignItems: "center",
    // Soft black fade behind the text area
    paddingTop: 60,
    // Using a background colour here instead of a true gradient keeps zero deps
    backgroundColor: "rgba(0,0,0,0.55)",
    marginHorizontal: -20, // bleed to screen edges
    paddingHorizontal: 20,
  },

  tagline: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: 0.3,
    lineHeight: 24,
    marginBottom: 28,
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif-light",
  },

  // ── Buttons ─────────────────────────────────
  primaryBtn: {
    width: "100%",
    height: 54,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  primaryBtnText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 2,
    fontFamily:
      Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif-condensed",
  },

  secondaryBtn: {
    marginTop: 18,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },

  secondaryBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 2,
    fontFamily:
      Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif-condensed",
  },
});
