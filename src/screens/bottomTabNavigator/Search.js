import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "./TopPages/AllOptions";
import OutAndAdventure from "./TopPages/OutAndAdventure";
import FoodAndDrink from "./TopPages/FoodAndDrink";
import ArtAndCulture from "./TopPages/ArtAndCulture";

// import {
//   useFonts,
//   Plus_Jakarta_Sans_Regular,
//   PlusJakartaSans_300Light,
//   PlusJakartaSans_500Medium,
//   PlusJakartaSans_700Bold,
// } from "@expo-google-fonts/plus-jakarta-sans";

const CategoryTabs = createMaterialTopTabNavigator();

const Search = () => {
  //   let [fontsLoaded, fontError] = useFonts({
  //     Plus_Jakarta_Sans_Regular,
  //     PlusJakartaSans_300Light,
  //     PlusJakartaSans_500Medium,
  //     PlusJakartaSans_700Bold,
  //   });

  //   if (!fontsLoaded && !fontError) {
  //     return null;
  //   }

  const Header = () => {
    return (
      <SafeAreaView style={styles.container}>
        {/* header container */}
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <View style={{ height: 48, width: 48 }} />
            <View style={styles.headingTextContainer}>
              <Text style={styles.headingText}>Islamabad</Text>
            </View>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>
        </View>

        {/* search container */}
        <View style={styles.topContainer}>
          <View
            style={{
              height: 48,
              width: 358,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                fontSize: 16, //fontFamily: "Plus_Jakarta_Sans-Regular"
                backgroundColor: "#E8F0F2",
                width: 340,
              }}
              placeholder="What are you looking for?"
              placeholderTextColor={"#4D7D99"}
              mode="outlined"
              outlineColor="transparent"
              left={<TextInput.Icon icon="magnify" color="#4D7D99" size={35} />}
            ></TextInput>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <>
      <Header />
      <CategoryTabs.Navigator
        initialRouteName="All"
        screenOptions={{
          lazy: true,
          lazyPreloadDistance: 1,
          lazyPlaceholder: () => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#4D7D99", opacity: 0.75 }}>
                  Loading...
                </Text>
              </View>
            );
          },

          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
            textTransform: "capitalize",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#4D7D99",
            height: 3,
            opacity: 0.4,
          },
          tabBarItemStyle: { width: "auto", padding: 0 },
          tabBarStyle: {
            marginHorizontal: 16,
          },

          tabBarActiveTintColor: "#0D171C",
          tabBarInactiveTintColor: "#4D7D99",
          tabBarScrollEnabled: true,
          tabBarGap: 32,
        }}
      >
        <CategoryTabs.Screen name="All" component={All} />
        <CategoryTabs.Screen
          name="Outdoor & Adventure"
          component={OutAndAdventure}
        />
        <CategoryTabs.Screen name="Food & Drink" component={FoodAndDrink} />
        <CategoryTabs.Screen name="Art & Culture" component={ArtAndCulture} />
      </CategoryTabs.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  topContainer: {
    height: 72,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
  },
  headingTextContainer: {
    height: 22.5,
    width: 262,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    // fontFamily: "Plus_Jakarta_Sans_700Bold",
    color: "#0D171C",
  },
});

export default Search;
