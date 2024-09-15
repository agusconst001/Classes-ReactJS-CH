import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./components/layouts/MainLayout";

//app.jsx es el padre
//ItemListContainer es el componente hijo
//greeting es una propiedad y el string el valor de la propieddad

//dentro de la etiqueta MainLayout vamos a agrgarle los componetes dinamicos
const App = () => {
  return (
    <ChakraProvider>
      <MainLayout> 
        <ItemListContainer greeting="Bienvenido a mi e-commerce"/>
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;

// HOC es un patron de diseño