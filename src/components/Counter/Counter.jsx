import { Button, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";

const Counter = () => {
    const [state, setState] = useState(0);
    const [stateTwo, setStateTwo] = useState(0);

    const handleAdd = () => {
        setState(state + 1);
    };

    const handlRemove = () => {
        setState(state - 1);
        setStateTwo(stateTwo - 1);
    };
    // 1ra forma de useEffect--> sirve para controlar cada punto dentro del ciclo de vida
    useEffect(()=>{
        console.log("useEffect descontrolado");
    });


// 2da forma de useEffect (controlado) - dependencias vacias --> solo se ejecuta la primera vez que el useEffect se monta
    useEffect( () => {
        console.log("useEffect con dependencias vacias")
    }, []);

    // 3er froma de useEffect (controlado con dependencias) --> depende de algo para ejecutarse, siempre se ejecuta al menos una vez
    useEffect( () => {
        console.log("useEffect con dependencia");
    }, [stateTwo]);

    return <Flex>
        <Button onClick={handlRemove}>-</Button>
        <Text>{state}</Text>
        //
        <Text>{stateTwo}</Text>
        <Button onClick={handleAdd}>+</Button>
    </Flex>;
};

export default Counter;