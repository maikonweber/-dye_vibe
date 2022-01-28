import React from 'react';
import {
    Box,
    Flex,
    AspectRatio,
    Image,
    Text,
    Link,
    Button,
    Stack
  } from "@chakra-ui/react";


export const Card = ({url, product, description}) => {
    return (
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
        
            src="https://picsum.photos/id/237/250/250"
            alt="Woman paying for a purchase"
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
            {'product'}
          </Text>
          <Link
            my={1}
            display="block"
            fontSize="md"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            {'summary'}
          </Link>
          <Text my={2} color="gray.900">
            {'longLine'}
          </Text>
          <Button w="180px" 
          bgGradient="linear(to-r, blue.700, green.200)"
          my={80}
          color='black.900'>
             Adquira Agora
          </Button>
        </Stack>
      </Box>
    );
}