import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../lib/auth-context";

function RouteGuard({ children } : { children: React.ReactNode }) {

  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "auth"

    if (!user && !inAuthGroup && !isLoadingUser) {
      // If user is not authenticated and is not in the login (auth) screen
      router.replace("/auth");
    } else if (user && inAuthGroup && !isLoadingUser) {
      // If user exists and is not in the login (auth) screen
      router.replace("/")
    }
  }, [user, segments]);

  return <>{children}</>
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }}/>
      </Stack>
    </RouteGuard>
  );
}
