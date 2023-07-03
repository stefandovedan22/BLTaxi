import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MapScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [adress, setAdress] = useState(null);
  const [region, setRegion] = useState(null);

  const getPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Zahtjev za pristup lokaciji odbijen");
      return;
    } else {
      setLocationPermission(true);
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0422,
      longitudeDelta: 0.02221,
    });

    let geocode = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    let number = geocode[0].streetNumber;
    if (number === null) {
      setAdress(geocode[0].street + " " + "bb");
    } else {
      setAdress(geocode[0].street + " " + geocode[0].streetNumber);
    }
  };

  useEffect(() => {
    console.log("map");
    navigation.setOptions({
      headerShown: false,
    });
    getPermission();
  }, []);

  let text = "Cekanje...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View className="">
      <View className="h-full">
        <MapView className="h-full" region={region} />
      </View>

      <TouchableOpacity
        className="w-10 h-10 inline-block absolute bottom-10 right-5 bg-sky-600 rounded-full items-center justify-center"
        onPress={getPermission}
      >
        <Ionicons name="locate-outline" size={24} color={"white"} />
      </TouchableOpacity>

      <View className="inline-block absolute bottom-1 left-10 right-10 items-center justify-center">
        <Text className="text-white font-bold bg-sky-600 opacity-100 text-center h-5 mb-1 rounded-sm">
          {adress}
        </Text>
      </View>
    </View>
  );
}
