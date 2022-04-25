import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Base"
          component={BaseScreen}
          options={{ title: "Base", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#000",
          marginTop: 20,
        }}
      >
        Softalk
      </Text> */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image style={styles.Img} source={require("./assets/Home.png")} />
      </View>

      <View
        style={{
          borderColor: "red",
          marginBottom: 50,
          width: "70%",
        }}
      >
        <TouchableOpacity>
          <Button
            onPress={() => navigation.navigate("Base")}
            width="100%"
            title="Get started"
            color="#007AFF"
          />
        </TouchableOpacity>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

const BaseScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>This is base screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Img: {
    height: "60%",
    width: "100%",
  },
});
