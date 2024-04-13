import { View, Text, Image } from "react-native";
import React from "react";

const OfferPallet = ({ imagePath, title, price, orientation = "vertical" }) => {
  const viewDimensions = {
    height: orientation === "vertical" ? 305 : 242,
  };

  const imageDimentions = {
    height: orientation === "vertical" ? 213 : 170,
  };
  return (
    <View
      style={{
        display: "flex",
        height: viewDimensions.height,
        width: 160,
        marginRight: 16,
      }}
    >
      <Image
        source={imagePath}
        height={imageDimentions.height}
        width={160}
        borderRadius={12}
      />
      <View
        style={{
          display: "flex",
          paddingVertical: 12,
          alignContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "medium",
            textAlign: "left",
            color: "#0D171C",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            textAlign: "left",
            color: "#4D7D99",
          }}
        >
          {price}
        </Text>
      </View>
    </View>
  );
};

export default OfferPallet;
