import { api } from "@/convex/_generated/api";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const tasks = useQuery(api.tasks.getTasks);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Authenticated>
        <Text>Authenticated</Text>
        {tasks?.map((task) => (
          <Text key={task._id}>{task.text}</Text>
        ))}
      </Authenticated>
      <Unauthenticated>
        <Link href="/sign-in">Sign in</Link>
        <Link href="/sign-up">Sign up</Link>
      </Unauthenticated>
    </View>
  );
}
