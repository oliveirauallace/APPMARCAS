import React from "react";
import { MenuProvider } from "react-native-popup-menu";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feeds from "./src/screens/Feeds";
import Detalhes from "./src/screens/Detalhes";

const Navegador = createStackNavigator(
  {
    Feeds: { screen: Feeds },
    Detalhes: { screen: Detalhes }
  },
  {
    headerMode: "none"
  }
);

const Contenedor = createAppContainer(Navegador)

export default function App() {
  return(
    <MenuProvider>
      <Contenedor></Contenedor>
    </MenuProvider>
  )
}