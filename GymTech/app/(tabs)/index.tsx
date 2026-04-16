import { router } from "expo-router";
import WelcomeScreen from "../WelcomeScreen";

export default function Index() {
  return (
    <WelcomeScreen
      onCreateAccount={() => router.push("/(tabs)")}
      onLogin={() => router.push("/(tabs)")}
      onClose={() => router.push("/(tabs)")}
    />
  );
}
