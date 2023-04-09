import logo from '../logo.svg';
import '../App.css';
import {ChakraProvider} from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom';


import Main from "/Users/nmacrii/Desktop/redhat/src/pages/mainAI.js"
import Loto from "/Users/nmacrii/Desktop/redhat/src/pages/Lottery"

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
