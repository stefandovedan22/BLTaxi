import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import ListVehicleFullCompany from "../components/ListVehicleFullCompany";

export default function CompanyScreen({ route }) {
  const { name } = route.params;
  const { number } = route.params;
  const navigation = useNavigation();
  let data = useSelector((state) => state.company.company);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="">
      <View className="pb-2 px-2 items-center">
        <Text className="text-2xl font-bold text-cyan-600">
          {name} {number}
        </Text>
      </View>
      {data.map((comp, index) => {
        if (comp.name === name) {
          return (
            <View key={index} className="mb-5 items-center">
              <View className="items-center" style={{ elevation: 20 }}>
                <Image
                  source={{ uri: comp.imageCompanyUrl }}
                  className="h-72 w-80 rounded-3xl"
                />
              </View>

              <TouchableOpacity className="items-center absolute top-56 right-4">
                <Image
                  source={require("../data/call1.png")}
                  className="w-14 h-14 rounded-lg"
                />
              </TouchableOpacity>
              <TouchableOpacity
                className="items-center absolute top-56 left-4"
                style={{ elevation: 1 }}
              >
                <Image
                  source={require("../data/viber_png.png")}
                  className="w-14 h-14 rounded-lg"
                />
              </TouchableOpacity>

              <View
                className="px-2 bg-gray-200 rounded-2xl pt-2 pb-2"
                style={{ elevation: 20, shadowOpacity: 20, width: 360 }}
              >
                <Text>
                  <Text className="text-base">• Cijena starta: </Text>
                  <Text className="text-base font-bold text-cyan-600">
                    {comp.startPrice}
                  </Text>
                </Text>

                <Text>
                  <Text className="text-base">• Cijena po kilometru: </Text>
                  <Text className="text-base font-bold text-cyan-600">
                    {comp.pricePerKm}
                  </Text>
                </Text>

                <Text>
                  <Text className="text-base">• Cijena čekanja: </Text>
                  <Text className="text-base font-bold text-cyan-600">
                    {comp.waitingPrice}
                  </Text>
                </Text>

                <Text>
                  <Text className="text-base">
                    • Cijena vožnje po makadamu:{" "}
                  </Text>
                  <Text className="text-base font-bold text-cyan-600">
                    {comp.macadamDrivePrice}
                  </Text>
                </Text>

                <Text>
                  <Text className="text-base">
                    • Cijena dodatnog prtljaga:{" "}
                  </Text>
                  <Text className="text-base font-bold text-cyan-600">
                    {comp.baggagePrice}
                  </Text>
                </Text>
              </View>
            </View>
          );
        }
      })}
      <View>
        <Text className="ml-5 text-base font-bold text-cyan-600 mb-1">
          Lista Vozila
        </Text>
        <View className="items-center">
          <ListVehicleFullCompany name={name} />
        </View>
      </View>
    </SafeAreaView>
  );
}
