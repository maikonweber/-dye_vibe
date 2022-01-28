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


export const Card = ({}) => {
    return (
        <Box
        bg="white"
        p={4}
        maxWidth="32rem"
        borderWidth={1}
        margin={5}
        rounded="lg"
        shadow="md"
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            maxWidth="500px"
            border="1px solid"
            borderColor="gray.200"
            margin="auto"
            src="https://picsum.photos/id/237/250/250"
            alt="Woman paying for a purchase"
          />
        </AspectRatio>
        <Stack
          align={{ sm: "center", md: "stretch" }}
          textAlign={{ sm: "center", md: "left" }}
          mt={{ sm: 4, md: 0 }}
          ml={{ md: 6 }}
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
          <Text my={2} color="gray.500">
            {'longLine'}
          </Text>
          <Button maxWidth="100px" my={2}>
             { 'Compre' }
          </Button>
        </Stack>
      </Box>
    );
}