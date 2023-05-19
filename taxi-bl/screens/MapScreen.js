import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [adress, setAdress] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Zahtjev za pristup lokaciji odbijen");
        return;
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
        {location ? (
          <Marker
            key={null}
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Marker"
          />
        ) : null}
      </View>
      <View className="inline-block absolute bottom-1 left-20 right-20">
        <Text className="text-white bg-cyan-600 opacity-70 text-center h-5 mb-1 rounded-sm">
          {adress}
        </Text>
      </View>
    </View>
  );
}
