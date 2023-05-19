import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DriverScreenLogIn() {
  const navigation = useNavigation();
  const [driver, setDriver] = useState({ username: "", password: "" });

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center">
      <View className="items-center border-cyan-600 w-9/12">
        <Text className="text-3xl mb-4 font-bold text-cyan-600">
          Prijava za vozače
        </Text>
        <View className="bg-gray-500 w-10/12 h-10 mb-2 rounded-sm justify-center">
          <TextInput
            placeholder="username"
            onChangeText={(text) => setDriver({ username: text })}
            className="text-white text-base"
            autoCapitalize="none"
          />
        </View>

        <View className="bg-gray-500 w-10/12 h-10 mb-2 rounded-sm justify-center">
          <TextInput
            placeholder="password"
            onChangeText={(text) => setDriver({ password: text })}
            secureTextEntry={true}
            className="text-white text-base"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DriverLogged");
          }}
          className="bg-cyan-600 w-6/12 h-9 items-center justify-center mb-2 rounded-sm"
        >
          <Text className="text-white text-base">Prijavi se</Text>
        </TouchableOpacity>
      </View>
      <View className="absolute bottom-1">
        <Text>Prijavu koriste samo vozači taksija.</Text>
      </View>
    </SafeAreaView>
  );
}
