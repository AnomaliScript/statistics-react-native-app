import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/tabs/login" style={styles.LoginLink}>Go to the Login Page!</Link>
    </View>
  );
}

// Styles here
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginLink: {
    padding: 10,
    height: 50,
    width: 200,
    borderRadius: 5,
    backgroundColor: 'cyan', 
    justifyContent: "center",
    alignItems: "center"
  }
})