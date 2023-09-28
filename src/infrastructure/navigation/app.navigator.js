import React from "react";
import {RestaurantScreen} from "../../features/restaurants/screens/restaurant.screen";
import {MapScreen} from "../../features/restaurants/screens/map.screen";
import {SettingsScreen} from "../../features/restaurants/screens/settings.screen";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
                name={focused ? iconName : `${iconName}-outline`}
                size={size}
                color={color}
            />
        ),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
    };
};

export const AppNavigator = () => {
    return (
        <NavigationContainer children={3}>
            <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}