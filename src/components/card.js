import React  from 'react';
import {
    Box,
    Flex,
    AspectRatio,
    Image,
    Text,
    Link,
    Button,
    Stack,
  } from "@chakra-ui/react";
import ProductModal from './modal/modal';
import { useState } from "react";



export const Card = ({id ,url, product, description, handleModal}) => {


    return (
      <>
        <Box
        bgGradient="linear-gradient(to right, #FFB6C1 10%, #90EE90 100%)"
        p={2}
        maxWidth="36rem"
        borderWidth={1}
        margin={0}
        rounded="lg"
        marginLeft={12}
        shadow="md"
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            maxWidth="500px"
            rounded="lg"
            shadow="md"
            border="1px solid"
            borderColor="gray.200"
            margin="auto"
        
            src={`${url}`}
            alt={`${product}`}
          />
        </AspectRatio>
        <Stack
          align="center" 
          textAlign= "center" 
          mt='4' 
          ml='6' 
        >
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            {`${product}`}
          </Text>
          <Link
            my={1}
            display="block"
            fontSize="md"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            {`${description}`}
          </Link>
          <Text my={2} color="gray.900">
            {'longLine'}
          </Text>
          <Button w="180px" 
          bgGradient="linear(to-r, blue.700, green.200)"
          my={80}
          color='black.900'
          onClick={handleModal()}>
             Adquira Agora
          </Button>
        </Stack>
      </Box>
      </>
    );
}