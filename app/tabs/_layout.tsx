import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveBackgroundColor: "aquamarine" }}>
      <Tabs.Screen name="index" options={{ 
                                            title: "Home" ,
                                            tabBarIcon: (

                                            ) => (
                                            <Feather name="home" size={24} color="black" />
                                          )
        }}/>
      <Tabs.Screen name="login" options={{ 
                                            title: "Login",
                                            tabBarIcon: (
                                              { focused }
                                            ) => {
                                              return focused ? (
                                                <FontAwesome6 name="door-open" size={24} color="black" />
                                              ) : (
                                                <FontAwesome6 name="door-closed" size={24} color="black" />
                                              )
                                            }
        }}/>
    </Tabs>
  );
}
