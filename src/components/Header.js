import React from "react";
import {
    Grid,
    GridItem,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    UnorderedList,
    ListItem,
    Link,
} from "@chakra-ui/react";
import "../Clickable.css"
import RH from '../RED HAT.svg';
import {ArrowForwardIcon} from "@chakra-ui/icons";
import { Link as LLL} from 'react-router-dom';



export default function Header() {

    const items = ["What is the process of voting?",
        "How would Rick explain the voting process in Moldova?",
        "What would Maya Sandu do if she were a samurai?",
        "Why should I go to the vote?",
        "Where is the lottery?"]
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={12}  p={4} >
      <GridItem colSpan={0}>
          <Button as={LLL} to="/" variant="link">
              <Image src={RH} alt="Logo" w="70px" />
          </Button>
      </GridItem>
      <GridItem colSpan={3}>
        <InputGroup >
            <Input boxShadow="lg" borderColor="white" background="white" placeholder="Generate Image" />
            <InputRightElement w="100px">
                <Button backgroundColor={"white"} textColor={"#9E45C8"}>Generate</Button>
            </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem colSpan={8}>
        <InputGroup>
          <Input  boxShadow="lg" borderColor="white" background="white" placeholder="Generate Text" />
          <InputRightElement width="auto">
            <Button backgroundColor={"whiteAlpha.100"} textColor={"#9E45C8"}>Generate</Button>
          </InputRightElement>
        </InputGroup>
      </GridItem>

    </Grid>
  );
}

