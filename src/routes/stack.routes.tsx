import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Recipe } from "../screens/Recipe";
import { Ingredients } from "../screens/Ingredients";
import { IngredientDescription } from "../screens/IngredientDescription";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Recipe"
                component={Recipe}
            />
            <Screen
                name="Ingredients"
                component={Ingredients}
            />
            <Screen
                name="IngredientDescription"
                component={IngredientDescription}
            />
        </Navigator>
    );
}