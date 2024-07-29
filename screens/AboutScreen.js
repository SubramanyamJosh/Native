import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function AboutScreen({ route }) {
  const { name } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title="Upate the Name"
        onPress={() => {
          // navigation.navigate("Home");
          navigation.setParams({ name: "JOSH" });
        }}
      />
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate("Home", { result: "Data from about" })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
