import { Account, Client } from "react-native-appwrite";

// console.log("ENDPOINT =", process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT);

export const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!);

export const account = new Account(client);