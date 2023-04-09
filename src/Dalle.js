import React from "react";
import {
    Grid,
    GridItem,
    Image,
    Box,
    VStack,
    HStack,
    Text,
    Container,
    UnorderedList,
    ListItem,
    Icon,
    Flex}
from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";


export default function Dalle() {
    const Images= {
        Image1: "https://cdn.openai.com/labs/images/%22A%20sea%20otter%20with%20a%20pearl%20earring%22%20by%20Johannes%20Vermeer.webp?v=1",
        Name1: "otter"
    }
    const handleClick = (item) => {
        console.log(`You clicked on ${item}`);
    };
    const items = ["What is the process of voting?", "How would Rick explain the voting process in Moldova?",
        "What would Maya Sandu do if she were a samurai?", "Why should I go to the vote?", "Where is the lottery?"]
    const ProcesedAnswer= "text..."
    const Links = {
        Link1: "https://anticoruptie.md/ro/dosare-de-coruptie/veaceslav-platon-in-fata-unei-decizii-care-ii-va-schimba-viata",
        Link2: "https://moldova.europalibera.org/a/31391754.html"
    }
    return (
        <Grid templateColumns="repeat(12, 1fr)" gap={4}  p={4}>
            <GridItem colSpan={0}/>
            <GridItem colSpan={3} style = {{marginTop: " -60%"}}>
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
            <GridItem colSpan={5} style = {{marginTop: " -35.5%"}}>
                <Container alignSelf="center">
                    <Box w="full"
                         minHeight="78vh" h="full"
                         boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                         borderRadius="6px"
                         aligItem="Center"
                         background="white"
                    >
                        <VStack alignItems="left" padding="5%">
                            <Text>
                                {ProcesedAnswer}
                            </Text>
                            <Flex>
                                <Icon as={ArrowForwardIcon}/>
                                <Text>{Links.Link1}</Text>
                            </Flex>
                            <Flex>
                                <Icon as={ArrowForwardIcon}/>
                                <Text >{Links.Link2}</Text>
                            </Flex>
                        </VStack>

                    </Box>
                </Container>

            </GridItem>
            <GridItem colSpan={3}>
                <UnorderedList backgroundColor={"white"} style={{ listStyleType: "none", margin: "0rem 0", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", borderRadius: "6px", padding: "5% 5% 5% 5%", opacity:"0"} }>
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

