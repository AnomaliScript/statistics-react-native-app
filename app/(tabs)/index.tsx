import { useAuth } from '@/lib/auth-context';
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function IndexPage() {
  const { signOut } = useAuth();
  return (
    <View style={styles.view}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button mode="text" onPress={signOut} icon={"logout"}>
        {" "}
        Sign Out {" "}
      </Button>
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