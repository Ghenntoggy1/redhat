import React from 'react';
import { Flex, Box, Icon, Text } from '@chakra-ui/react';
import icon from "../RED HAT.svg"
function MainFiekd() {
  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      bg="#6B6B6B"
      direction="column"
    >
      <Flex align="center" justify="center">
        <Icon as={icon} fontSize="48px" color="#FFF" mr="4" />
        <Box textAlign="center">
          <Text color="#FFF" fontSize="30px" lineHeight="1.2">
          is a web page that has the aim to inform 
          </Text>
          <Text color="#FFF" fontSize="30px" lineHeight="1.2">
          people about the voting process via AI
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default MainFiekd;
