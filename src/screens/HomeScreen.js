import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./bottomTabNavigator/Search";
import Favorite from "./bottomTabNavigator/Favorite";
import Accomodation from "./bottomTabNavigator/Accomodation";
import Bookings from "./bottomTabNavigator/Bookings";
import Profile from "./bottomTabNavigator/Profile";

const Tabs = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs.Navigator
        initialRouteName="Search"
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Favorite" component={Favorite} />
        <Tabs.Screen name="Accomodation" component={Accomodation} />
        <Tabs.Screen name="Bookings" component={Bookings} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
    </>
  );
};

export default HomeScreen;
