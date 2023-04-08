import React from "react";
import { Grid, GridItem, Image, Input, Button } from "@chakra-ui/react";


function Header() {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} bg="gray.100" p={4}>
      <GridItem colSpan={2}>
        <Image src={URL("https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg")} alt="Logo" />
      </GridItem>
      <GridItem colSpan={5}>
        <Input placeholder="Enter your name" />
      </GridItem>
      <GridItem colSpan={3}>
        <Input placeholder="Enter your email" />
      </GridItem>
      <GridItem colSpan={2}>
        <Button colorScheme="blue">Generate</Button>
      </GridItem>
    </Grid>
  );
}

export default Header;
