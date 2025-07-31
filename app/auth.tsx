import { useRouter } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View
} from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { AuthProvider, useAuth } from "../lib/auth-context";

export default function AuthScreen() {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPass] = useState<string>("");
    const [error, setError] = useState<string | null>("");

    const theme = useTheme();
    const router = useRouter();

    const { signIn, signUp } = useAuth();

    async function handleAuth() {
        if (!email || !password) {
            setError("Check if you have a username and a password");
            return;
        }

        if (password.length < 6) {
            setError("Passwords must be at least 6 characters long.");
            return;
        }

        setError(null);

        if (isSignUp) {
            const error = await signUp(email, password)
            if (error) {
                setError(error);
                return;
            }
        } else {
            const error = await signIn(email, password)
            if (error) {
                setError(error);
                return;
            }

            router.replace("/");
        }
    }

    function handleSwitchMode() {
        setIsSignUp((prev) => !prev)
    }
    return (
        <AuthProvider>
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
                        onChangeText={setEmail}
                    />

                    {/* Password Input */}
                    <TextInput 
                        style={styles.input}
                        label="Password" 
                        autoCapitalize="none" 
                        keyboardType="email-address" 
                        placeholder="Password"
                        mode="outlined"
                        textAlign="center"
                        textAlignVertical="center"
                        onChangeText={setPass}
                    />

                    {error && <Text style={{ color: theme.colors.error }}> {error} </Text>}

                    <Button mode="contained" style={styles.button} onPress={handleAuth}>{isSignUp ? "Create an Account!" : "Welcome Back"}</Button>

                    <Button mode="contained" buttonColor="#a1a1a1ff" onPress={handleSwitchMode} style={styles.switchButton}>
                        {isSignUp ? 
                        "Already have an account? Sign In" : 
                        "Don't have an account? Sign up"}
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </AuthProvider>
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