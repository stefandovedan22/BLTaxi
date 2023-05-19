import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { CheckCircleIcon, XCircleIcon } from "react-native-heroicons/solid";

export default function ListVehicleFull({ name }) {
  let data = useSelector((state) => state.company.company);

  return (
    <View>
      {data.map((comp, index) => {
        if (comp.name === name) {
          return comp.vehicles.map((veh, index) => {
            if (veh.takenByDriver) {
              return (
                <View key={index} className="flex-row">
                  <ScrollView
                    className="flex-1 px-3 gap-x-1"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <View className="w-20 mb-1">
                      <Text>• {veh.vehicleModel}</Text>
                    </View>
                    <View className="w-24">
                      <Text> Br. sjedišta: {veh.numOfSeats}</Text>
                    </View>
                    <View className="w-24">
                      <Text> Br. vozila {veh.vehicleNumber}</Text>
                    </View>
                  </ScrollView>
                  <View className="mx-1 mr-1.5">
                    {veh.availableVehicle ? (
                      <CheckCircleIcon
                        className="mr-4"
                        size={20}
                        color={"green"}
                      />
                    ) : (
                      <XCircleIcon class="mr-4" size={20} color={"red"} />
                    )}
                  </View>
                </View>
              );
            }
          });
        }
      })}
    </View>
  );
}
