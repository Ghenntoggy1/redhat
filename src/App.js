import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import Header from './Header';

function App() {
  return (
    <ChakraProvider>
      <App />
      <Header/>
    </ChakraProvider>
  );
}

export default App;
