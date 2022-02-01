import React from 'react';
import {} from '@chakra-ui/react';




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
            alt="

}   