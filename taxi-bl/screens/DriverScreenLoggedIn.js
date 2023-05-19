import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import dataMock from "../data/mockDriver.json";
import { setDriver } from "../redux/driverSlice";

export default function DriverScreenLoggedIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let [data, setData] = useState(null);
  let driver = useSelector((state) => state.driver.driver);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    dispatch(setDriver(dataMock));
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="items-center">
        <Text className="text-2xl font-bold text-cyan-600">
          {driver.name} {driver.surname}
        </Text>
        <Text className="text-2xl font-bold text-cyan-600">
          {driver.company_name}
        </Text>
      </View>

      <View className="gap-y-10 w-full items-center justify-center">
        <TouchableOpacity className="bg-green-500 w-8/12 h-2/6 items-center justify-center rounded-md">
          <Text className="text-2xl font-bold text-white">Započni vožnju</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-500 w-8/12 h-2/6 items-center justify-center rounded-md">
          <Text className="text-2xl font-bold text-white">Završi vožnju</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
