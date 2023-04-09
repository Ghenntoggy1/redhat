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
import {ArrowForwardIcon, CheckIcon} from "@chakra-ui/icons";



export default function Header() {

    const items = ["What is the process of voting?",
        "How would Rick explain the voting process in Moldova?",
        "What would Maya Sandu do if she were a samurai?",
        "Why should I go to the vote?",
        "Where is the lottery?"]
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}  p={4}>
      <GridItem colSpan={0}>
        <Image src={RH} alt="Logo" />
      </GridItem>
      <GridItem colSpan={3}>
        <InputGroup >
            <Input boxShadow="lg" borderColor="white" background="white" placeholder="Generate Image" />
            <InputRightElement w="100px">
                <Button backgroundColor={"white"} textColor={"#9E45C8"}>Generate</Button>
            </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem colSpan={5}>
        <InputGroup>
          <Input  boxShadow="lg" borderColor="white" background="white" placeholder="Generate Text" />
          <InputRightElement width="auto">
            <Button backgroundColor={"whiteAlpha.100"} textColor={"#9E45C8"}>Generate</Button>
          </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem colSpan={3}  >
          <UnorderedList
              bg="rgba(255, 255, 255, 0.65)"
              style={{
                  listStyleType: "none",
                  margin: "0rem 0",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "6px",
                  padding: "5% 5% 5% 5%",
              }}
          >
              <ListItem>
                  <Link href="#">
                      <ArrowForwardIcon />
                      {items[0]}
                  </Link>
              </ListItem>
              <ListItem>
                  <Link href="#">
                      <ArrowForwardIcon />
                      {items[1]}
                  </Link>
              </ListItem>
              <ListItem>
                  <Link href="#">
                      <ArrowForwardIcon />
                      {items[2]}
                  </Link>
              </ListItem>
              <ListItem>
                  <Link href="#">
                      <ArrowForwardIcon />
                      {items[3]}
                  </Link>
              </ListItem>
              <ListItem>
                  <Link href="/lottery" color="red">
                      <ArrowForwardIcon />
                      {items[4]}
                  </Link>
              </ListItem>
          </UnorderedList>
      </GridItem>
    </Grid>
  );
}

