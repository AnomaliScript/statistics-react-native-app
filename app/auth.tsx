import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    function handleAuth() {

    }
    function handleSwitchMode() {
        setIsSignUp((prev) => !prev)
    }
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.title} variant="headlineMedium"> {isSignUp ? "Create an Account!" : "Welcome Back"} </Text>

                {/* Email Input */}
                <TextInput 
                    style={styles.input}
                    label="Email" 
                    autoCapitalize="none" 
                    keyboardType="email-address" 
                    placeholder="JohnDoe@gmail.com"
                    mode="outlined"
                    textAlign="center"
                    textAlignVertical="center"
                />

                {/* Password Input */}
                <TextInput 
                    style={styles.input}
                    label="Password" 
                    autoCapitalize="none" 
                    keyboardType="email-address" 
                    placeholder="JohnDoe@gmail.com"
                    mode="outlined"
                    textAlign="center"
                    textAlignVertical="center"
                />

                <Button mode="contained" style={styles.button}>{isSignUp ? "Create an Account!" : "Welcome Back"}</Button>

                <Button mode="contained" buttonColor="#a1a1a1ff" onPress={handleSwitchMode} style={styles.switchButton}>
                    {isSignUp ? 
                    "Already have an account? Sign In" : 
                    "Don't have an account? Sign up"}
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}

// Styles!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bc97ffff"
    },
    content: {
        flex: 1,
        backgroundColor: "",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        marginBottom: 24,
    },
    input: {
        marginBottom: 12,
    },
    button: {
        marginTop: 8,
    },
    switchButton: {
        marginTop: 16,
    }
})