import logo from '../logo.svg';
import '../App.css';
import {ChakraProvider} from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom';


import Main from "./mainAI.js"
import Loto from "./Lottery"

function App() {
  return (
    <ChakraProvider>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/lottery" element={<Loto />} />

        </Routes>
    </ChakraProvider>
  );
}

export default App;
