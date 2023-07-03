import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import ListVehicleFullCompany from "../components/ListVehicleFullCompany";

export default function CompanyScreen({ route }) {
  const LINK =
    "https://e043-46-239-6-110.eu.ngrok.io" + "/taxi_company/images/";
  const { name } = route.params;
  const { number } = route.params;
  const navigation = useNavigation();
  let data = useSelector((state) => state.company.company);
  let viberNum;
  let callNum;
  let [vehiclesCount, setVehiclesCount] = useState(0);
  let [numOfVehicles, setNumOfVehicles] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    data.map((comp, index) => {
      if (comp.name === name) {
        setNumOfVehicles(comp.numOfVehicles);
        comp.phoneNumbers.map((numb, index) => {
          if (numb.hasViber) {
            viberNum = numb.callNumber;
            viberNum = viberNum.replace("/", "");
            viberNum = viberNum.replace("-", "");
            viberNum = viberNum.slice(1);
          }
        });
        comp.vehicles.map((veh, index) => {
          if (veh.takenByDriver && veh.availableVehicle) {
            setVehiclesCount(++vehiclesCount);
          }
        });
      }
    });
  }, []);

  const canOpen = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Nemate installiranu Viber aplikaciju");
    }
  };

  return (
    <SafeAreaView className="">
      <ScrollView>
        <View className="pb-2 px-2 items-center">
          <Text className="text-2xl font-bold text-cyan-600">
            {name} {number}
          </Text>
        </View>
        {data.map((comp, index) => {
          if (comp.name === name) {
            console.log(LINK + comp.imageUrl);
            return (
              <View key={index} className="mb-5 items-center">
                <View className="items-center" style={{ elevation: 20 }}>
                  <Image
                    source={{ uri: comp.imageCompanyUrl }}
                    // source={{ uri: LINK + comp.imageUrl }}
                    className="h-72 w-80 rounded-3xl"
                  />
                </View>

                {/* zeleni button poziv */}
                <TouchableOpacity
                  className="items-center absolute top-56 right-4"
                  onPress={() => {
                    Linking.openURL(`tel:${number}`);
                  }}
                >
                  <Image
                    source={require("../data/call1.png")}
                    className="w-14 h-14 rounded-lg"
                  />
                </TouchableOpacity>
                {/* viber button poziv */}
                {comp.phoneNumbers.map((phone, index) => {
                  if (phone.hasViber) {
                    return (
                      <TouchableOpacity
                        key={index}
                        className="items-center absolute top-56 left-4"
                        onPress={() => {
                          canOpen(`viber://contact?number=%2B387${viberNum}`);
                        }}
                      >
                        <Image
                          source={require("../data/viber_png.png")}
                          className="w-14 h-14 rounded-lg"
                        />
                      </TouchableOpacity>
                    );
                  }
                })}

                {/* Info View */}
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

                  {comp.startPrice !== comp.startPriceNight ? (
                    <Text>
                      <Text className="text-base">• Noćna cijena starta: </Text>
                      <Text className="text-base font-bold text-cyan-600">
                        {comp.startPriceNight}
                      </Text>
                    </Text>
                  ) : (
                    <></>
                  )}

                  <Text>
                    <Text className="text-base">• Cijena po kilometru: </Text>
                    <Text className="text-base font-bold text-cyan-600">
                      {comp.pricePerKm}
                    </Text>
                  </Text>

                  {comp.pricePerKm !== comp.pricePerKmNight ? (
                    <Text>
                      <Text className="text-base">
                        • Noćna cijena po kilometru:{" "}
                      </Text>
                      <Text className="text-base font-bold text-cyan-600">
                        {comp.pricePerKmNight}
                      </Text>
                    </Text>
                  ) : (
                    <></>
                  )}

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

                  <Text className="text-base">• Brojevi telefona: </Text>
                  {comp.phoneNumbers.slice(1).map((phone, index) => {
                    return (
                      <Text
                        className="text-base font-bold text-cyan-600"
                        key={index}
                      >
                        • {phone.callNumber}{" "}
                      </Text>
                    );
                  })}
                </View>
              </View>
            );
          }
        })}
        <View>
          <Text className="ml-5 text-base font-bold text-cyan-600 mb-1">
            Lista Vozila {vehiclesCount} / {numOfVehicles}
          </Text>
          <View className="items-center">
            <ListVehicleFullCompany name={name} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
