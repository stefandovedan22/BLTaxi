import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { CheckCircleIcon, XCircleIcon } from "react-native-heroicons/solid";

export default function ListVehicle({ name }) {
  let data = useSelector((state) => state.company.company);
  let temp = [];

  data.map((comp) => {
    if (comp.name === name) {
      comp.vehicles.map((veh) => {
        if (veh.takenByDriver) {
          temp.push(veh);
        }
      });
    }
  });

  return (
    <View>
      {temp.slice(0, 3).map((veh, index) => {
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
                <CheckCircleIcon className="mr-4" size={20} color={"green"} />
              ) : (
                <XCircleIcon class="mr-4" size={20} color={"red"} />
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}

{
  /* <View key={index}>
            <View className="flex-row px-4 gap-x-1">
              <View className="flex-row flex-1">
                <Text>• {veh.vehicleModel} -</Text>
                <Text> Sjedista: {veh.numOfSeats}</Text>
              </View>
              <View className="mr-7">
                {veh.availableVehicle ? (
                  <CheckCircleIcon className="pr-4" size={20} color={"green"} />
                ) : (
                  <XCircleIcon class="mr-4" size={20} color={"red"} />
                )}
              </View>
            </View>
          </View> */
}
