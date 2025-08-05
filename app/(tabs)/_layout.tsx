import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
          tabBarActiveBackgroundColor: "aquamarine", 
          headerStyle: { backgroundColor: "#9affe9ff" }, 
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: "#ffffffff",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0
          },
          tabBarActiveTintColor: "#30b969ff",
          tabBarInactiveTintColor: "#d4d4d4"
      }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
        title: "Today's Habits", 
        tabBarIcon: (
          { color, size, focused }
        ) => {
          return focused ? (
            <MaterialCommunityIcons name="school" size={size} color={color} />
          ) : (
            <MaterialCommunityIcons name="school-outline" size={size} color={color} />
          )
        }
        }}/>
        <Tabs.Screen 
        name="streaks" 
        options={{ 
          title: "Streaks",
          tabBarIcon: (
            { color, size, focused }
          ) => {
            return focused ? (
              <MaterialCommunityIcons name="fire-circle" size={size} color={color} />
            ) : (
              <MaterialCommunityIcons name="fire" size={size} color={color} />
            )
          }
        }}/>
      <Tabs.Screen 
        name="add_habit" 
        options={{ 
          title: "Add Habit",
          tabBarIcon: (
            { color, size, focused }
          ) => {
            return focused ? (
              <MaterialCommunityIcons name="pencil-box" size={size} color={color} />
            ) : (
              <MaterialCommunityIcons name="pencil-box-outline" size={size} color={color} />
            )
          }
        }}/>
    </Tabs>
  );
}
