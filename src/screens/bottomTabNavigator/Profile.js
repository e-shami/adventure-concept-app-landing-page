import { View, Text } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
      }}
    >
      <Text
        style={{
          fontSize: 26,
          color: "#0D171C",
          fontWeight: "bold",
          letterSpacing: 1.25,
          marginVertical: 15,
        }}
      >
        Profile Settings
      </Text>
      <Text>
        <Text
          style={{
            fontSize: 14,
            color: "#0D171C",
            opacity: 0.65,
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: 1.25,
            marginVertical: 10,
          }}
        >
          This Feature will be implemented soon...
        </Text>{" "}
      </Text>
    </View>
  );
};

export default Profile;
