import logo from './logo.svg';
import './App.css';
import {ChakraProvider, VStack, background} from '@chakra-ui/react'
import fon from "./MAZ.png"

import Header from './Header';
import Dalle from './Dalle';
import GeneratorText from './GeneratorText';

function App() {
  return (
    <ChakraProvider>
        <VStack>
            <Header/>
            <Dalle/>
        </VStack>

    </ChakraProvider>
  );
}

export default App;
