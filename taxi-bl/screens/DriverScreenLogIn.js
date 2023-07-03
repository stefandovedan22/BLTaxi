import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDriver } from "../redux/driverSlice";
import { SelectList } from "react-native-dropdown-select-list";

export default function DriverScreenLogIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [errorText, setErrorText] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  });

  const logIn = async () => {
    console.log(JSON.stringify({ username: username, password: password }));
    let response = await fetch(
      "https://4e38-79-142-181-167.eu.ngrok.io/login",
      {
        method: "POST",
        headers: {
          // Accept: "aplication/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      }
    );

    if (response.ok) {
      response = await response.json();
      console.log(response);
      setErrorText("");
      dispatch(setDriver(response));
      const pushAction = StackActions.push("DriverLogged");
      navigation.dispatch(pushAction);
    } else {
      setErrorText("Pogresan username ili password");
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center">
      <View className="items-center border-cyan-600 w-9/12">
        <Text className="text-3xl mb-4 font-bold text-cyan-600">
          Prijava za vozače
        </Text>
        <View className="bg-gray-500 w-10/12 h-10 mb-2 rounded-sm justify-center">
          <TextInput
            placeholder="username"
            onChangeText={(text) => setUsername(text)}
            className="text-white text-base"
            autoCapitalize="none"
          />
        </View>

        <View className="bg-gray-500 w-10/12 h-10 mb-2 rounded-sm justify-center">
          <TextInput
            placeholder="password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            className="text-white text-base"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            // console.log(username);
            // console.log(password);
            const pushAction = StackActions.push("DriverLogged");
            navigation.dispatch(pushAction);
            // logIn();
          }}
          className="bg-cyan-600 w-6/12 h-9 items-center justify-center mb-2 rounded-sm"
        >
          <Text className="text-white text-base">Prijavi se</Text>
        </TouchableOpacity>
      </View>
      <View className="absolute bottom-1">
        <Text className="text-red-500">{errorText}</Text>
        <Text>Prijavu koriste samo vozači taksija.</Text>
      </View>
    </SafeAreaView>
  );
}
