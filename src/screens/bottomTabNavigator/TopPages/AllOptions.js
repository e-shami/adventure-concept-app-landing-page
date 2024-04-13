import { View, Text, ScrollView } from "react-native";
import React from "react";
import OfferPallet from "../../../components/OfferPallet";

const All = () => {
  const Bestsellers = [
    {
      imagePath: require("../../../../assets/BestsellerFrame1.png"),
      title: "Hiking in the Shadrah Valley",
      price: "$40",
    },
    {
      imagePath: require("../../../../assets/BestsellerFrame2.png"),
      title: "Biking in F9 Park",
      price: "$30",
    },
    {
      imagePath: require("../../../../assets/BestsellerFrame3.png"),
      title: "Picnic in Park View City",
      price: "$60",
    },
    {
      imagePath: require("../../../../assets/BestsellerFrame4.png"),
      title: "Dining in F7 Markaz",
      price: "$70",
    },
  ];

  const Trending_row1 = [
    {
      imagePath: require("../../../../assets/Sailing_Trending.png"),
      title: "Sailing in Rawal Lake",
      price: "$40",
    },
    {
      imagePath: require("../../../../assets/Cycling_Trending.png"),
      title: "Cycling in Behria Enclave",
      price: "$60",
    },
  ];

  const Trending_row2 = [
    {
      imagePath: require("../../../../assets/Picnic_Trending.png"),
      title: "Picnic in Margallah Hills",
      price: "$30",
    },
    {
      imagePath: require("../../../../assets/Wine_Trending.png"),
      title: "Wine Tasting in Murree Brewery",
      price: "$50",
    },
  ];

  const TrendingRows = ({ rowSet }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 16,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        {rowSet.map((item, index) => (
          <OfferPallet
            key={index}
            imagePath={item.imagePath}
            title={item.title}
            price={item.price}
            orientation={"horizontal"}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#0D171C" }}>
          Bestsellers
        </Text>
      </View>

      <ScrollView
        style={{ padding: 16, paddingBottom: 8 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Bestsellers.map((item, index) => (
          <OfferPallet
            key={index}
            imagePath={item.imagePath}
            title={item.title}
            price={item.price}
          />
        ))}
      </ScrollView>

      <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#0D171C" }}>
          Trending
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <TrendingRows rowSet={Trending_row1} />
        <TrendingRows rowSet={Trending_row2} />
      </View>
    </ScrollView>
  );
};

export default All;
