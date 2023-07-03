import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  let data = useSelector((state) => state.company.company);
  const navigation = useNavigation();
  const LINK =
    "https://e043-46-239-6-110.eu.ngrok.io" + "/taxi_company/images/";

  return (
    <ScrollView
      showsHorizontalScrollIndicator={true}
      horizontal={true}
      className="pb-2 mx-1"
    >
      {data.map((comp, index) => {
        let temp = comp.name;
        return (
          <TouchableOpacity
            className="items-center justify-center rounded-md"
            key={index}
            onPress={() => {
              navigation.navigate("Company", {
                name: temp,
                number: comp.phoneNumbers[0].callNumber,
                imageUrl: comp.imageUrl,
              });
            }}
          >
            <Image
              source={{ uri: comp.imageUrl }}
              // source={{ uri: LINK + comp.smallImageUrl }}
              className="h-14 w-14 mx-0.5 rounded-sm"
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
