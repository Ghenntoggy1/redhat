import React from "react";
import { Grid, GridItem, Image, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";


function Header() {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}  p={4}>
      <GridItem colSpan={1}>
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
      <GridItem colSpan={2}>
        
      </GridItem>
    </Grid>
  );
}

export default Header;
