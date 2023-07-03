import { View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import Ionicons from "@expo/vector-icons/Ionicons";

import ListVehicleFull from "./ListVehicleFull";
import ListVehicleShort from "./ListVehicleShort";

export default function ListCompany({
  name,
  startPrice,
  pricePerKm,
  numOfVehicles,
}) {
  const navigation = useNavigation();
  let data = useSelector((state) => state.company.company);
  let availableVehiclesCount = 0;
  let vehiclesCount = 0;
  let vehiclesTakenCount = 0;
  let [expanded, setExpanded] = useState(false);
  let number;

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View className="mb-0.5">
      {data.map((comp, index) => {
        if (comp.name === name) {
          {
            number = comp.phoneNumbers[0].callNumber;
            comp.vehicles.map((veh, index) => {
              if (veh.takenByDriver && veh.availableVehicle) {
                vehiclesCount++;
              }
              if (veh.takenByDriver) {
                vehiclesTakenCount++;
              }
            });
          }
        }
      })}

      <View className="flex-1 flex-row">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Company", {
              name: name,
              number: number,
            });
          }}
          className="border border-cyan-800 bg-cyan-600 flex-1 flex-row px-1 ml-1 rounded-md drop-shadow-lg"
        >
          <Text className="flex-1 text-lg text-white">
            {name} {vehiclesCount}/{vehiclesTakenCount}
          </Text>
          <Text className="text-lg text-white mr-2">{startPrice}</Text>
          <Text className="text-lg text-white">{pricePerKm}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleExpand}
          className="mx-1 border border-cyan-800 bg-cyan-600 rounded-md"
        >
          {!expanded ? (
            <Ionicons name="chevron-down-outline" size={24} color={"white"} />
          ) : (
            <Ionicons name="chevron-up-outline" size={24} color={"white"} />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView>
        {!expanded ? (
          <ListVehicleShort name={name} />
        ) : (
          <ListVehicleFull name={name} />
        )}
      </ScrollView>
    </View>
  );
}
