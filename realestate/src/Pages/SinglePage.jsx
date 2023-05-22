import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from "@chakra-ui/react";
  import { MdLocalShipping } from "react-icons/md";
  import { useState } from "react";
  import { useEffect } from "react";
  import { useParams } from "react-router-dom";
import axios from "axios";
  
  
  export default function SinglePage() {
   
    const [data, setdata] = useState(null);
    const { id } = useParams();
  
    const getdata = async (id) => {
       let res= await axios.get(`https://real-statedata.vercel.app/random/${id}`)
        let data= await res.data;
        console.log(data)
        setdata(data)
    //   await fetch(`http://localhost:3000/random/${id}`)
    //     .then((d) => d.json())
    //     .then((data) => {
    //       setdata(data);
    //       console.log(data);
    //     });
    };
  
    useEffect(() => {
      getdata(id);
    }, [id]);

    const savedproperty = () => {
      let savearr = JSON.parse(localStorage.getItem("saveproperty")) || [];
  
      savearr.push(+id);
  
      localStorage.setItem("saveproperty", JSON.stringify(savearr));
  
      console.log(id);
    };
  
    return (
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data && data.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {data && data.type}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Just In Your Hand Only at:- {data && data.price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("red", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"500"}
                >
                  This property is in demand. Buy in best Condition as It is
                 properly maintained.
                </Text>
                <Text fontSize={"lg"}>Valuable</Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Details
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Location:{data && data.address}</ListItem>
                    <ListItem>Seller:{"Abhisek"}</ListItem>{" "}
                  </List>
                  <List spacing={2}>
                    <ListItem>With Proper Detail</ListItem>
                    <ListItem>{data && data.seller_no}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
             
            </Stack>
  
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            onClick={savedproperty}

            >
             Save Your Property
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={"center"}>
              <MdLocalShipping />
              <Text>Check AnyTime 24/7</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }