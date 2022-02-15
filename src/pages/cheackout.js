import React, {useContext, useState, useEffect} from 'react';
import { Flex, Input, Button, Stack, FormLabel, FormControl, Box , Grid} from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext';


export const Cheackout = () => {


// useContext
const {cart, handleAddtoCart, handleRemoveItemFromCart, clearCart} = useContext(AuthContext);
console.log(cart)


    return (
        <>
            <Flex align='center' justify='center' h='100vh'>
                <Grid templateColumns='repeat(3, 1fr)' gap={8}>
                    <Stack spacing={4} />
                    {cart.map((item, index) => (
                        <Box key={index}
                                        w='150px' h='150px' bgGradient='linear(to-r,red.200, green.200)' p='10px'>
                    </Box>
                         ))}
                                </Grid>
                                        </Flex>                
            </>
       
    )


    

   
    }