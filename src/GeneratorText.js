import React from "react";
import {Grid, GridItem, Box, VStack, Text, Container} from "@chakra-ui/react";


export default function GeneratorText() {
    const gg= {

    }
    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={4}  p={4}>
            <GridItem colSpan={5}>
                <Container bg="#FFFFFF" alignSelf="center">
                    <Box w="full" minHeight="78vh" h="full"  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)" borderRadius="6px" aligItem="Center" background="white">
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

