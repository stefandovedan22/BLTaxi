import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Network from "expo-network";
import { useDispatch, useSelector } from "react-redux";
import { setCompany } from "../redux/companySlice";

import Categories from "../components/Categories";
import ListCompany from "../components/ListCompany";

import offlineData from "../data/offlineData.json";

export default function HomeScreen() {
  const navigation = useNavigation();
  let company = useSelector((state) => state.company.company);
  let loading = useSelector((state) => state.company.loading);
  const dispatch = useDispatch();

  let dataMock = [
    {
      id: 1,
      name: "Patrol taxi",
      city: "Banja Luka",
      startPrice: "1.60 KM",
      pricePerKm: "1.20 KM",
      startPriceNight: "1.90 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Lični prtljag se ne naplaćuje.",
      macadamDrivePrice: "Dodatno 2 KM po km.",
      imageUrl:
        "https://lh3.googleusercontent.com/9PQhR_t8bwL6DtUKN_xiZ4T0FXQ_Ci7BNKVIm7CInsfVJuvjfJOY1gckiK6tnqRsboYDWH2OArY68GmeR4o7aaqOhFmd9MjCzVqljCif",
      imageCompanyUrl:
        "https://lh3.googleusercontent.com/Tkoob6vB0q6sSEqLpb9ZVKRNpHIWKSuc7NciDTNIimhcgL53Hq8PYDYOS5OoeWP7b_Z40mvuM5-Mww6jtrqFE5bsXGn-Ku0j2FGFuis",
      notifications: [{ id: 1, description: "Novi popust od 1.6.!!!" }],
      phoneNumbers: [
        { id: 1, callNumber: "1533", isShortNumber: true, hasViber: false },
        {
          id: 2,
          callNumber: "066/015-330",
          isShortNumber: false,
          hasViber: true,
        },
        {
          id: 3,
          callNumber: "051/438-600",
          isShortNumber: false,
          hasViber: false,
        },
      ],
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 2,
          vehicleModel: "Peugeot",
          vehiclePlate: "K23-M-223",
          yearOfProduction: 2011,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "124",
        },
        {
          id: 17,
          vehicleModel: "Opel",
          vehiclePlate: "293-K-222",
          yearOfProduction: 2010,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "125",
        },
        {
          id: 18,
          vehicleModel: "Audi",
          vehiclePlate: "222-J-112",
          yearOfProduction: 2011,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "126",
        },
        {
          id: 19,
          vehicleModel: "BMW",
          vehiclePlate: "343-M-343",
          yearOfProduction: 2010,
          numOfSeats: 4,
          availableVehicle: true,
          takenByDriver: false,
          vehicleNumber: "137",
        },
        {
          id: 20,
          vehicleModel: "Opel",
          vehiclePlate: "J43-K-191",
          yearOfProduction: 2012,
          numOfSeats: 4,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "138",
        },
        {
          id: 21,
          vehicleModel: "VW",
          vehiclePlate: "345-E-124",
          yearOfProduction: 2005,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "237",
        },
      ],
      numOfVehicles: 7,
    },
    {
      id: 2,
      name: "Ideal taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/ZdHAopFgv6HZbeLV1-wPteA4lwvW80tSc_5u2D2cC_-qJ6-rP1KTyANm9P_kucJ_NBfO0Bw5n772fa6ACH4Cth4JMbsl4E9wdpPxfYdf",
      imageCompanyUrl:
        "https://lh3.googleusercontent.com/tLIBEVMHqKHn2pVskAItSC3tfR6AQ9kJ_EddNQZg4rATkP-nB-l2NCsNiVxC0LyVZ1waXDNCGq2nB8FW0nlTXF_VWtD6INvLsjnzmigk",

      notifications: [],
      phoneNumbers: [
        { id: 4, callNumber: "1545", isShortNumber: true, hasViber: false },
        {
          id: 5,
          callNumber: "051/321-120",
          isShortNumber: false,
          hasViber: false,
        },
        {
          id: 20,
          callNumber: "065/151-545",
          isShortNumber: false,
          hasViber: true,
        },
      ],
      vehicles: [
        {
          id: 3,
          vehicleModel: "Opel",
          vehiclePlate: "J13-M-225",
          yearOfProduction: 2010,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: false,
          vehicleNumber: "23",
        },
        {
          id: 4,
          vehicleModel: "Opel",
          vehiclePlate: "K21-M-111",
          yearOfProduction: 2007,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "24",
        },
        {
          id: 22,
          vehicleModel: "Peugeot",
          vehiclePlate: "345-E-125",
          yearOfProduction: 2009,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "675",
        },
        {
          id: 23,
          vehicleModel: "Renault",
          vehiclePlate: "345-E-126",
          yearOfProduction: 2011,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "543",
        },
        {
          id: 24,
          vehicleModel: "Opel",
          vehiclePlate: "345-E-127",
          yearOfProduction: 2001,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "1",
        },
        {
          id: 25,
          vehicleModel: "Mercedes",
          vehiclePlate: "345-E-128",
          yearOfProduction: 2012,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "2",
        },
        {
          id: 26,
          vehicleModel: "Mazda",
          vehiclePlate: "345-E-129",
          yearOfProduction: 2019,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "3",
        },
        {
          id: 27,
          vehicleModel: "Honda",
          vehiclePlate: "345-E-130",
          yearOfProduction: 2011,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "4",
        },
        {
          id: 28,
          vehicleModel: "Skoda",
          vehiclePlate: "111-K-999",
          yearOfProduction: 2012,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: false,
          vehicleNumber: "5",
        },
      ],
      numOfVehicles: 9,
    },
    {
      id: 3,
      name: "Big taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/YzDWNuIKyadANMUK87HCAseABx6tQqibH8-KXwF49lU3jur2p7DOV9bX2IlpWy_ZFt4JcL6sQnVtaJvoL_7XGLRh8maHiIRqQ6ArXeQ",
      imageCompanyUrl:
        "https://lh3.googleusercontent.com/kFtDDYIjr2Tz3hDBZkuIHiR8NhxLNKPnd6MEEjN7aIDu7CF4yfWJxRyMfrOh_3Ez9z2vMn5W-cKHYVn2MnJSs6tb4HHe4B-aTQLgVvU",

      notifications: [],
      phoneNumbers: [
        { id: 6, callNumber: "1511", isShortNumber: true, hasViber: false },
        {
          id: 7,
          callNumber: "051/217-700",
          isShortNumber: false,
          hasViber: false,
        },
        {
          id: 8,
          callNumber: "051/217-717",
          isShortNumber: false,
          hasViber: false,
        },
        {
          id: 21,
          callNumber: "066/211-511",
          isShortNumber: false,
          hasViber: true,
        },
      ],
      vehicles: [
        {
          id: 5,
          vehicleModel: "Peugeot",
          vehiclePlate: "345-E-123",
          yearOfProduction: 2008,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "333",
        },
        {
          id: 6,
          vehicleModel: "Mazda",
          vehiclePlate: "M23-J-123",
          yearOfProduction: 2009,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "45",
        },
      ],
      numOfVehicles: 2,
    },
    {
      id: 4,
      name: "Banjalučki taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2,00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/NhhxMNw-j5YEVOLAWJg1T-GkvatSnLhNL9XGuxibQwVYaBGFBCCmSf1wUur9HLbsz1tZfhQFLebWXGr-w1b0gK5xBgdm2k4gm-KBuPxa",
      imageCompanyUrl:
        "https://lh3.googleusercontent.com/w2FO_tXsFj0WKHGdAOyPr3yCEEohe3R7mNb0FK6Q6pNxPxPOPcHh0zjopIrK0T0kPfWa293F8VKQddwxq2jfp79PVzKWhznt72koZ03Z",

      notifications: [],
      phoneNumbers: [
        { id: 9, callNumber: "1544", isShortNumber: true, hasViber: false },
        {
          id: 10,
          callNumber: "051/232-310",
          isShortNumber: false,
          hasViber: false,
        },
        {
          id: 11,
          callNumber: "051/232-320",
          isShortNumber: false,
          hasViber: false,
        },
      ],
      vehicles: [
        {
          id: 7,
          vehicleModel: "VW",
          vehiclePlate: "234-K-098",
          yearOfProduction: 2010,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "66",
        },
        {
          id: 8,
          vehicleModel: "Renault",
          vehiclePlate: "456-I-123",
          yearOfProduction: 2011,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "86",
        },
      ],
      numOfVehicles: 2,
    },
    {
      id: 5,
      name: "Maxi taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Ne naplaćuje se.",
      macadamDrivePrice: "Dodatno 2 KM po km.",
      imageUrl:
        "https://lh3.googleusercontent.com/IBvR1jBYZIumz5q4OsCmWvnC4ZSVxDncprXv_lZoo21Tw3gwOJcRStEFpSSFMd9mu6eIa9SnI3RWqVJVKotGVc31UJApXEiZT5SoZ9dy",
      imageCompanyUrl:
        "https://lh3.googleusercontent.com/HPRta__l7YU0xzR2KcB-RME9uWC7qFiFoRsUGjno-FlQuWLeDqMascHRXOB8JgrE49YrLb82exN6Q_eyCpXSTzGUrS91c8m8LclHwEo",

      notifications: [],
      phoneNumbers: [
        { id: 12, callNumber: "1551", isShortNumber: true, hasViber: false },
        {
          id: 13,
          callNumber: "051/322-630",
          isShortNumber: false,
          hasViber: false,
        },
      ],
      vehicles: [
        {
          id: 9,
          vehicleModel: "Nissan",
          vehiclePlate: "121-J-121",
          yearOfProduction: 2012,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "433",
        },
        {
          id: 10,
          vehicleModel: "VW",
          vehiclePlate: "111-M-111",
          yearOfProduction: 2012,
          numOfSeats: 4,
          availableVehicle: false,
          takenByDriver: false,
          vehicleNumber: "56",
        },
      ],
      numOfVehicles: 2,
    },
    {
      id: 6,
      name: "Mobil taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/ZCnPjFFBP0upyG_JhRaKhWFcZv3jdeWjA0OpdARIwPm8-6990efuzfBpYw-haByK-lcidBkfD5mykV8sMCC-PUm_lvAgNLNbOPTfxolV",
      imageCompanyUrl:
        "https://lh3.googleusercontent.com/dowBCZndi_L6bMOugLHq62VbCZeDnkQnO1uq2nts65qDB1mnSKPKtrV1Ag2tWISWatTnvA6zcPSlco8f-oEBZo3gvIcOKoWnNRYmALc",

      notifications: [],
      phoneNumbers: [
        { id: 14, callNumber: "1566", isShortNumber: true, hasViber: false },
        {
          id: 15,
          callNumber: "051/313-333",
          isShortNumber: false,
          hasViber: false,
        },
      ],
      vehicles: [
        {
          id: 11,
          vehicleModel: "Citroen",
          vehiclePlate: "M11-K-222",
          yearOfProduction: 2013,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "78",
        },
        {
          id: 12,
          vehicleModel: "Mercedes",
          vehiclePlate: "222-A-234",
          yearOfProduction: 2011,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "900",
        },
      ],
      numOfVehicles: 2,
    },
    {
      id: 7,
      name: "Euro taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Ne naplaćuje se.",
      macadamDrivePrice: "Dodatno 2 KM po km.",
      imageUrl:
        "https://lh3.googleusercontent.com/LgcQYRaie_Wg3W0ezvtrOEVtwHIGT-t0an75a6yNIMLLj6ShUNQCTXaDf3beI4baO58563T5PqVCd6YlQcToi8n0E_dXycEy5LWzkDDDyQ",
      imageCompanyUrl:
        "https://lh3.googleusercontent.com/v6t_sWPH8lhBRoxhQLkciSEyyC06Z52unSE153s4srVTK5o0lK2-SNMHWLrWDz7wlxf3JzHcgA-rKtXNytUPN-eio-OmwbXXi8KL6IQ",

      notifications: [],
      phoneNumbers: [
        { id: 16, callNumber: "1555", isShortNumber: true, hasViber: false },
        {
          id: 17,
          callNumber: "051/460-600",
          isShortNumber: false,
          hasViber: false,
        },
        {
          id: 18,
          callNumber: "051/460-700",
          isShortNumber: false,
          hasViber: false,
        },
      ],
      vehicles: [
        {
          id: 13,
          vehicleModel: "Mazda",
          vehiclePlate: "245-O-234",
          yearOfProduction: 2010,
          numOfSeats: 4,
          availableVehicle: false,
          takenByDriver: false,
          vehicleNumber: "232",
        },
        {
          id: 14,
          vehicleModel: "Audi",
          vehiclePlate: "683-M-212",
          yearOfProduction: 2015,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "12",
        },
      ],
      numOfVehicles: 2,
    },
    {
      id: 8,
      name: "Biznis taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/5_yhQcCoOaCyY3XGKjrje1qRWwWuWjQGr9Y6GIgNrdDk4g_im5nEPcAAOHFnDGPKAXe2nLiL-p66lg2c_gbZurpQYpCAaKfktxnJ0jbD",
      imageCompanyUrl:
        "https://lh3.googleusercontent.com/L2JSQtfV5OVdyYtKfMy8a8ORWu0NeiNlXvyK_f4PU61BrHm6q-Ox0VXKV8jnCM7yVgW1wZsxjLFVVMhtaapo0dMTD_r3zXI1LRdMdav3xg",

      notifications: [],
      phoneNumbers: [
        {
          id: 19,
          callNumber: "065/282-282",
          isShortNumber: false,
          hasViber: true,
        },
      ],
      vehicles: [
        {
          id: 15,
          vehicleModel: "Honda",
          vehiclePlate: "J23-O-111",
          yearOfProduction: 2016,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: false,
          vehicleNumber: "11",
        },
        {
          id: 16,
          vehicleModel: "Hiundai",
          vehiclePlate: "345-M-111",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "7",
        },
      ],
      numOfVehicles: 2,
    },
  ];

  let dataMock2 = [
    {
      id: 1,
      name: "Patrol taxi",
      city: "Banja Luka",
      startPrice: "1.60 KM",
      pricePerKm: "1.20 KM",
      startPriceNight: "1.60 KM",
      pricePerKmNight: "1.20 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Lični prtljag se ne naplaćuje.",
      macadamDrivePrice: "Dodatno 2 KM po km.",
      imageUrl:
        "https://lh3.googleusercontent.com/9PQhR_t8bwL6DtUKN_xiZ4T0FXQ_Ci7BNKVIm7CInsfVJuvjfJOY1gckiK6tnqRsboYDWH2OArY68GmeR4o7aaqOhFmd9MjCzVqljCif",
      notifications: [
        {
          id: 1,
          description: "Novi popust od 1.6.!!!",
        },
      ],
      phoneNumbers: [
        {
          id: 1,
          callNumber: "1533",
          isShortNumber: true,
          hasViber: false,
        },
        {
          id: 2,
          callNumber: "066/015-330",
          isShortNumber: false,
          hasViber: true,
        },
        {
          id: 3,
          callNumber: "051/438-600",
          isShortNumber: false,
          hasViber: false,
        },
      ],
      numOfVehicles: "3",
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Audi",
          vehiclePlate: "J12-T-345",
          yaerOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
      ],
    },
    {
      id: 2,
      name: "Ideal taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/ZdHAopFgv6HZbeLV1-wPteA4lwvW80tSc_5u2D2cC_-qJ6-rP1KTyANm9P_kucJ_NBfO0Bw5n772fa6ACH4Cth4JMbsl4E9wdpPxfYdf",
      notifications: [],
      phoneNumbers: [],
      numOfVehicles: "2",
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
      ],
    },
    {
      id: 3,
      name: "Big taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/YzDWNuIKyadANMUK87HCAseABx6tQqibH8-KXwF49lU3jur2p7DOV9bX2IlpWy_ZFt4JcL6sQnVtaJvoL_7XGLRh8maHiIRqQ6ArXeQ",
      notifications: [],
      phoneNumbers: [],
      numOfVehicles: "3",
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Audi",
          vehiclePlate: "J12-T-345",
          yaerOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "123",
        },
      ],
    },
    {
      id: 4,
      name: "Banjalučki taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2,00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/NhhxMNw-j5YEVOLAWJg1T-GkvatSnLhNL9XGuxibQwVYaBGFBCCmSf1wUur9HLbsz1tZfhQFLebWXGr-w1b0gK5xBgdm2k4gm-KBuPxa",
      notifications: [],
      phoneNumbers: [],
      numOfVehicles: "2",
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Audi",
          vehiclePlate: "J12-T-345",
          yaerOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "123",
        },
      ],
    },
    {
      id: 5,
      name: "Maxi taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Ne naplaćuje se.",
      macadamDrivePrice: "Dodatno 2 KM po km.",
      imageUrl:
        "https://lh3.googleusercontent.com/IBvR1jBYZIumz5q4OsCmWvnC4ZSVxDncprXv_lZoo21Tw3gwOJcRStEFpSSFMd9mu6eIa9SnI3RWqVJVKotGVc31UJApXEiZT5SoZ9dy",
      notifications: [],
      phoneNumbers: [],
      numOfVehicles: "1",
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
      ],
    },
    {
      id: 6,
      name: "Mobil taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/ZCnPjFFBP0upyG_JhRaKhWFcZv3jdeWjA0OpdARIwPm8-6990efuzfBpYw-haByK-lcidBkfD5mykV8sMCC-PUm_lvAgNLNbOPTfxolV",
      notifications: [],
      phoneNumbers: [],
      numOfVehicles: "5",
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Audi",
          vehiclePlate: "J12-T-345",
          yaerOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Audi",
          vehiclePlate: "J12-T-345",
          yaerOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "123",
        },
      ],
    },
    {
      id: 7,
      name: "Euro taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Ne naplaćuje se.",
      macadamDrivePrice: "Dodatno 2 KM po km.",
      imageUrl:
        "https://lh3.googleusercontent.com/LgcQYRaie_Wg3W0ezvtrOEVtwHIGT-t0an75a6yNIMLLj6ShUNQCTXaDf3beI4baO58563T5PqVCd6YlQcToi8n0E_dXycEy5LWzkDDDyQ",
      notifications: [],
      phoneNumbers: [],
      numOfVehicles: "4",
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Audi",
          vehiclePlate: "J12-T-345",
          yaerOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Audi",
          vehiclePlate: "J12-T-345",
          yaerOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: false,
          takenByDriver: true,
          vehicleNumber: "123",
        },
      ],
    },
    {
      id: 8,
      name: "Biznis taxi",
      city: "Banja Luka",
      startPrice: "2.00 KM",
      pricePerKm: "1.50 KM",
      startPriceNight: "2.00 KM",
      pricePerKmNight: "1.50 KM",
      waitingPrice: "15.00 KM po satu",
      baggagePrice: "Slobodna pogodba.",
      macadamDrivePrice: "Slobodna pogodba.",
      imageUrl:
        "https://lh3.googleusercontent.com/5_yhQcCoOaCyY3XGKjrje1qRWwWuWjQGr9Y6GIgNrdDk4g_im5nEPcAAOHFnDGPKAXe2nLiL-p66lg2c_gbZurpQYpCAaKfktxnJ0jbD",
      notifications: [],
      phoneNumbers: [],
      numOfVehicles: "3",
      vehicles: [
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
        {
          id: 1,
          vehicleModel: "Skoda",
          vehiclePlate: "J12-T-345",
          yearOfProduction: 2017,
          numOfSeats: 5,
          availableVehicle: true,
          takenByDriver: true,
          vehicleNumber: "123",
        },
      ],
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    const interval = setInterval(() => {
      console.log(1);
      dispatch(setCompany(dataMock));
      // {
      //   dispatch(setCompany(offlineData));
      // }
      console.log("---");
      // fetch("https://e043-46-239-6-110.eu.ngrok.io/taxi_company")
      //   .then((Response) => Response.json())
      //   .then((data) => {
      //     dispatch(setCompany(data));
      //   })
      //   .catch((error) => console.log(error));
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      {loading && (
        <View className="pb-2 mx-4">
          <Text className="text-2xl font-bold text-sky-600">
            Učitavanje podataka...
          </Text>
        </View>
      )}

      {!loading && (
        <ScrollView showsVerticalScrollIndicator={true}>
          <View>
            {/* <View className="pb-2 px-2 items-center">
              <Text className="text-2xl font-bold text-cyan-600">
                Lista Vozila
              </Text>
            </View> */}
            <View className="mt-2 mb-0.5">
              <Categories />
            </View>
            <View>
              {company.map((comp, index) => {
                return (
                  <ListCompany
                    key={index}
                    name={comp.name}
                    startPrice={comp.startPrice}
                    pricePerKm={comp.pricePerKm}
                    numOfVehicles={comp.numOfVehicles}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
