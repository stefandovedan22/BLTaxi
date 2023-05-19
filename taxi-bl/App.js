import { Provider } from "react-redux";
import store from "./redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";

import CallScreen from "./screens/CallScreen";
import CompanyScreen from "./screens/CompanyScreen";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import DriverScreenLogIn from "./screens/DriverScreenLogIn";
import DriverScreenLoggedIn from "./screens/DriverScreenLoggedIn";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Call" component={CallScreen} />
      <Stack.Screen name="Company" component={CompanyScreen} />
    </Stack.Navigator>
  );
}

function DriverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DriverLog" component={DriverScreenLogIn} />
      <Stack.Screen name="DriverLogged" component={DriverScreenLoggedIn} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          className="bg-black w-10"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let textName;
              if (route.name === "HomeStack") {
                iconName = focused ? "list-sharp" : "list-outline";
                textName = "Home";
              } else if (route.name === "Map") {
                iconName = focused ? "location-sharp" : "location-outline";
                textName = "Map";
              } else if (route.name === "DriverStack") {
                iconName = focused ? "car-sharp" : "car-outline";
                textName = "";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: false,
          })}
        >
          <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen
            name="DriverStack"
            component={DriverStack}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// export default function App() {
//   return (
//     <View>
//       <Text>Yooo</Text>
//       <Text>Yooo</Text>
//       <Text>Yooo</Text>
//       <Text className="text-red-700">Yooo</Text>
//     </View>
//   );
// }
