import logo from '../logo.svg';
import '../App.css';
import {Box, ChakraProvider, VStack} from '@chakra-ui/react'

import Header from '../components/Header';
import Dalle from '../components/Dalle';

function App() {
    return (
        <ChakraProvider>
            <Box
                backgroundImage="url('https://scontent.fkiv8-1.fna.fbcdn.net/v/t39.30808-6/339320967_3224618044443444_1542757019928680227_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=QAFlrFFWFhkAX-KLO-s&_nc_ht=scontent.fkiv8-1.fna&oh=00_AfAdj5chlTS1bCwh3vfAsFYUG20R1PHiRL3zwPxlok_q_A&oe=64377054')"
                minHeight="100vh"
                minWidth="100vh"
            >
                <VStack>
                    <Header/>
                    <Dalle/>
                </VStack>
            </Box>


        </ChakraProvider>
    );
}

export default App;
