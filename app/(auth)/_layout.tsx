import { useAuth } from "@clerk/clerk-expo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="sign-in"
        options={{
          title: "Sign in",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? "sign-in" : "user"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sign-up"
        options={{
          title: "Sign up",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? "user-plus" : "user"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
