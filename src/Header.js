import React from "react";
import { Grid, GridItem, Image, Input, InputGroup, InputRightElement, Button,UnorderedList, ListItem  } from "@chakra-ui/react";
import "./Clickable.css"


function Header() {
    const handleClick = (item) => {
        console.log(`You clicked on ${item}`);
      };
    const items = ["What is the process of voting?", "How would Rick explain the voting process in Moldova?",
                "What would Maya Sandu do if she were a samurai?", "Why should I go to the vote?", "Where is the lottery?"]
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}  p={4}>
      <GridItem colSpan={0}>
        <Image src={"https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"} alt="Logo" />
      </GridItem>
      <GridItem colSpan={3}>
        <Input placeholder="Enter person name" />
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
      <UnorderedList backgroundColor={"white"} style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <ListItem key={item} onClick={() => handleClick(item)} className = "list-underline">
          {item}
        </ListItem>
      ))}
    </UnorderedList>
      </GridItem>
    </Grid>
  );
}

export default Header;
