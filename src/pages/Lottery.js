import '../App.css';
import {Box, Center, ChakraProvider, Text, ListItem, OrderedList, HStack, Image, Button} from '@chakra-ui/react'
import RH from '../RED HAT.svg';
import { Link } from 'react-router-dom';



function lotto() {
    return (


        <ChakraProvider>

            <Box
                backgroundImage="url('https://scontent.fkiv8-1.fna.fbcdn.net/v/t39.30808-6/339320967_3224618044443444_1542757019928680227_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=QAFlrFFWFhkAX-KLO-s&_nc_ht=scontent.fkiv8-1.fna&oh=00_AfAdj5chlTS1bCwh3vfAsFYUG20R1PHiRL3zwPxlok_q_A&oe=64377054')"
                minHeight="100vh"
                minWidth="100vh"

            >
                <Button as={Link} to="/" w="100px" ml="1%"  padding="1%" variant="link" >
                        <Image src={RH} alt="Logo"   />

                </Button>



                <Center marginTop="-5%">
                <Box minHeight="78vh" h="full"
                     w="900px"
                     boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                     borderRadius="6px"
                     alignItems="center"
                     bg="rgba(255, 255, 255, 0.65)"
                     padding="5%"


                >
                    <Text textAlign="center" fontWeight="bold">
                        All you need to know about lottery
                    </Text>
                    <Center>
                        <OrderedList >
                            <ListItem>
                                Participate to the vote
                            </ListItem>
                            <ListItem>
                                Present yourself to the corespondents
                            </ListItem>
                            <ListItem>
                                Show them proofs that you have voted (name, how old are you, vote)
                            </ListItem>
                            <ListItem>
                                Write your name and put it in the bowl to participate
                            </ListItem>
                            <ListItem>
                                Wait for the announcement
                            </ListItem>
                        </OrderedList>
                    </Center>
                    <Text textAlign="center" fontWeight="bold">
                        Awards
                    </Text>
                    <Center>
                        <HStack>
                        <Image src="https://onlinestore.worldwideticketcraft.com/files/subscribers/1c2e84aa-5eb2-4ccd-8589-eb430de107e2/sites/3135f329-d86b-4035-8dc9-0947218fab4d/products/Product_3ac5de02-28f8-4a79-b3f9-006b352d4e44_xlarge.png" w="200px"/>
                        <Image src="https://o.remove.bg/downloads/a543c82f-fc69-4105-9b06-708560fa6f3d/images-removebg-preview.png" w="200px"/>
                        <Image src="https://o.remove.bg/downloads/edd00ed1-6c84-4de7-ba05-bf1dc6d5c5de/pc-solo3-black-thrqtr-left-removebg-preview.png" w="200px"/>
                        </HStack>
                    </Center>
                    <Center>
                    <HStack>
                        <Image src="https://o.remove.bg/downloads/df3bb207-f763-47c8-b195-bd34821b4ba6/6613f73d72328f430c6e55e3de5d3acccf-24-parenting-books-1.rsquare.w700-removebg-preview.png" w="100px"/>
                        <Image src="https://o.remove.bg/downloads/9f53e134-9b58-433e-9fd5-94764169a12d/st_small_507x507-pad_600x600_f8f8f8-removebg-preview.png" w="100px"/>
                        <Image src="https://cdn.shopify.com/s/files/1/2471/4056/products/brownhoodie_2000x.png?v=1584555294%20alt=%E2%80%9DCM%20BROWN%20HOODIE" w="100px"/>
                        <Image src="https://o.remove.bg/downloads/681bc71f-3cae-4291-8359-547b5959befa/KCZ-MS-L1-2925-nylon-cozy_sand-multi_flat-lil-removebg-preview.png" w="100px"/>
                        <Image src="https://o.remove.bg/downloads/bc05c0f0-a3f9-440d-8022-0ab9ad6a6dd3/laptop-graduation-cap-wifi-icon-260nw-1009520221-removebg-preview.png" w="100px"/>

                    </HStack>
                    </Center>
                    <Text textAlign="center" fontWeight="bold" padding="2%">
                        Sponsors:
                    </Text>
                    <Center>
                    <HStack>
                        <Image src="https://o.remove.bg/downloads/cf6bd3e3-59da-4b52-b5c2-09cbf8d499af/fallout-new-vegas-fallout-4-art-fallout-3-nuka-cola-removebg-preview.png" w="100px"/>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Aperture_Laboratories_Logo.svg/2560px-Aperture_Laboratories_Logo.svg.png" w="100px"/>
                        <Image src="https://o.remove.bg/downloads/164b1efc-0f0c-40ca-a02b-fca680e25283/679_bbc-removebg-preview.png" w="100px"/>
                        <Image src="https://www.eu4youthdays.eu/images/eu4youth_vertical.png" w="100px"/>

                    </HStack>
            </Center>
                </Box>
                </Center>
            </Box>

        </ChakraProvider>
    );
}

export default lotto;
