import { useRef } from "react";

import { Box , Button } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";


//useRed  es un hook que nos permite acceder a un helemanto del DOM
//genera una referancia de algun elemento que nosotros elijamos y luego coloca ese elemento con la referencia dentro del DOM

const MainLayout = ({children}) => {
    const footerRef = useRef(null); //creamos las refereancia

    const handleClick = () => {
        footerRef.current.innerHTML = "Texto cambiado";
        footerRef.current.setAttribute("style", "color: red;");
    };
    
    return <Box>
        <NavBar />
        {children}
        {/* <Footer ref={footerRef}> Este es mi footer </Footer> */}
        {/* <Button onClick={handleClick} marginBotton={'40px'}>Cambiar texto</Button> */}
    </Box>;
};

export default MainLayout;

// el children es una propiedad que recibe un componente

//el CICLO DE VIDA son los estados por los que pasa un componente
//     ↓↓↓↓
// 1- montaje: cuando el componente se monta en la aplocacion, es decir, se muestra en la app
// 2- actualizacion: se prodice cuando un componente ya generadp se ha actualizado
// 3- desmonjate: cuando se actualiza un componente sale del DOM y se vuelve a montar

// HOOKS
// Los mas usados:
// useState - useEffect - useContext
//cada hooks hace algo particular