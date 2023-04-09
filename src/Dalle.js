import React from "react";
import {Grid, GridItem, Image, Box, VStack, HStack, Text, Container} from "@chakra-ui/react";


export default function Dalle() {
    const Images= {
        Image1: "https://cdn.openai.com/labs/images/%22A%20sea%20otter%20with%20a%20pearl%20earring%22%20by%20Johannes%20Vermeer.webp?v=1",
        Name1: "otter"
    }
    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={4}  p={4}>
            <GridItem colSpan={0}/>
            <GridItem colSpan={3}>
                <Container alignSelf="center" >
                    <Box w="full"
                         minHeight="78vh"
                         h="full"
                         boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                         borderRadius="6px"
                         aligItem="Center"
                         background="white"
                    >
                        <VStack alignItems="center" spacing={4} flexDir="column" paddingTop="40px">
                            <Image src={Images.Image1} alt="otter1" w="200px" h="200px"/>
                            <HStack spacing={1}>
                                <Image src={Images.Image1} alt="otter2" w="65px" h="65px" />
                                <Image src={Images.Image1} alt="otter3" w="65px" h="65px"/>
                                <Image src={Images.Image1} alt="otter4" w="65px" h="65px"/>
                            </HStack>
                            <Text leftPadding="5%" rightPadding="5%">
                                “how cool looks and otter boi in hd”
                            </Text>
                        </VStack>
                </Box>
                </Container>
            </GridItem>
            <GridItem colSpan={5}>
                <Container alignSelf="center">
                    <Box w="full"
                         minHeight="78vh" h="full"
                         boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                         borderRadius="6px"
                         aligItem="Center"
                         background="white"
                    >
                        <VStack>
                            <Text leftPadding="5%" rightPadding="5%">

                            </Text>

                        </VStack>

                    </Box>
                </Container>

            </GridItem>
        </Grid>
    );
}

