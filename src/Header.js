import React from "react";
import { Grid, GridItem, Image, Input, InputGroup, InputRightElement, Button,UnorderedList, ListItem, IconButton   } from "@chakra-ui/react";
import "./Clickable.css"
import iconS  from "./Vector.svg";
import iconL from "./listIco.png"
import RH from './RED HAT.svg';


export default function Header() {
    const handleClick = (item) => {
        console.log(`You clicked on ${item}`);
      };
    const items = ["What is the process of voting?", "How would Rick explain the voting process in Moldova?",
                "What would Maya Sandu do if she were a samurai?", "Why should I go to the vote?", "Where is the lottery?"]
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}  p={4}>
      <GridItem colSpan={0}>
        <Image src={RH} alt="Logo" />
      </GridItem>
      <GridItem colSpan={3}>
        <InputGroup>
            <Input placeholder="Enter person name" />
            <InputRightElement>
                <IconButton icon={iconS} onClick={handleClick} aria-label="Search"  style={{width:100}}/>
            </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem colSpan={5}>
        <InputGroup>
          <Input placeholder="Enter your email" />
          <InputRightElement width="auto">
            <Button backgroundColor={"whiteAlpha.100"} textColor={"#9E45C8"}>Generate</Button>
          </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem colSpan={3}  >
      <UnorderedList backgroundColor={"aqua"} style={{ listStyleType: "none", margin: "0rem 0", boxShadow: "inset", borderRadius: "md", padding: "5% 5% 5% 5%"} }>
        {items.map((item, index) => (
            <ListItem onClick={() => handleClick(item)} className = "list-underline"
              key={index}
              color={index === items.length - 1 ? "red.500" : "black.500"}
            >
             {item}
            </ListItem>
      ))}
    </UnorderedList>
      </GridItem>
    </Grid>
  );
}

