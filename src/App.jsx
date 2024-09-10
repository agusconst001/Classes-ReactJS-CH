import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a mi e-commerce"/>
    </ChakraProvider>
  );
};

export default App;
