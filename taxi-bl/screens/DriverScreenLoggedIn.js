import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import dataMock from "../data/mockDriver.json";
import { setDriver } from "../redux/driverSlice";
// import { useBackHandler } from "react-native-comunity/hooks";
import { StackActions } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SelectList } from "react-native-dropdown-select-list";

export default function DriverScreenLoggedIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let data = useSelector((state) => state.company.company);
  dispatch(setDriver(dataMock));
  let driver = useSelector((state) => state.driver.driver);
  let [text, setText] = useState("");
  const [selected, setSelected] = useState();
  let vehicles = [];

  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
      headerShown: false,
    });

    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
    data.map((comp, index) => {
      if (comp.name === driver.company_name) {
        comp.vehicles.map((veh, index) => {
          if (!veh.takenByDriver) {
            vehicles.push({
              key: veh.id,
              value: veh.vehicleModel + " " + veh.vehiclePlate,
            });
          }
        });
      }
    });
  }, [navigation]);

  const startShift = () => {};

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <ScrollView> */}
      <View className="flex-row w-full ">
        <Image
          // source={{ uri: driver.taxiCompany.imageUrl }}
          source={{ uri: driver.company_image }}
          className="w-24 h-24 ml-3 mt-3"
        />
        <View>
          <Text className="ml-3 mt-3 text-2xl font-bold text-sky-600">
            {driver.name} {driver.surname}
          </Text>
          <Text className="ml-3 text-2xl font-bold text-sky-600">
            {driver.company_name}
          </Text>
          <Text className="ml-3 text-2xl font-bold text-sky-600">{text}</Text>
        </View>
      </View>
      <View className=" pl-3 flex-row items-center py-5">
        <SelectList
          data={vehicles}
          setSelected={(val) => setSelected(val)}
          save="value"
          search={false}
          arrowicon={
            <Ionicons name="chevron-down-outline" size={24} color={"#0284c7"} />
          }
          boxStyles={{ backgroundColor: "white" }}
          inputStyles={{ color: "#0284c7", fontSize: 18, fontWeight: "bold" }}
          dropdownStyles={{ backgroundColor: "white" }}
          dropdownTextStyles={{ color: "#0284c7", fontSize: 16 }}
        />
      </View>
      <View className="flex-row">
        <TouchableOpacity className="bg-sky-400 w-24 h-24 ml-3 items-center justify-center rounded-lg">
          <Text className="text-white text-xl font-bold">Započni smjenu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-sky-600 w-24 h-24 ml-3 items-center justify-center rounded-lg"
          onPress={() => {
            const pushAction = StackActions.push("DriverLog");
            navigation.dispatch(pushAction);
          }}
        >
          <Text className="text-white text-xl font-bold">Odjavi</Text>
          <Text className="text-white text-xl font-bold">Se</Text>
        </TouchableOpacity>
      </View>
      {/* {if()} */}
      <View className="w-full items-center justify-center mt-5">
        <TouchableOpacity
          className="bg-green-500 w-56 h-24 items-center justify-center rounded-md mb-10"
          onPress={() => {
            setText("Voznja startovana.");
          }}
        >
          <Text className="text-2xl font-bold text-white">Započni vožnju</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-red-500 w-56 h-24 items-center justify-center rounded-md"
          onPress={() => {
            setText("Voznja zavrsena.");
          }}
        >
          <Text className="text-2xl font-bold text-white">Završi vožnju</Text>
        </TouchableOpacity>
      </View>
      <View className=""></View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
