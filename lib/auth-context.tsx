import { createContext, useContext } from "react";
import { ID } from "react-native-appwrite";
import { account } from "./appwrite";

type AuthContextType = {
    // user: Models.User<Models.Preferences> | null;
    signUp: (email: string, password: string) => Promise<string | null>;
    signIn: (email: string, password: string) => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Function Component
export function AuthProvider({children} : {children: React.ReactNode}) {
    const signUp = async (email: string, password: string) => {
        try {
            await account.create(ID.unique(), email, password);
            // Signing up automatically does signing in
            await signIn(email, password);
            return null;
        } catch(error) {
            if (error instanceof Error) {
                return error.message;
            }
            return "An error occurred.";
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession(email, password);
            return null;
        } catch(error) {
            if (error instanceof Error) {
                return error.message;
            }

            return "An error occured.";
        }
    };

    return <AuthContext.Provider value={{ signUp, signIn }}>
                { children }
            </AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be inside of the AuthProvider")
    }
    return context;
}