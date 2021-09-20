import React from 'react'
import {Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { Card } from '../components/card'
import Slider from '../components/Slider'
import { sliderItems } from '../data'


export const Home = () => {


    return (
        <Flex direction='column' h='100vh' >
            <Flex  w='100%' my='6' h='50vh' maxWidth={1480} mx='auto' px='6' >
                <Slider sliderItems={sliderItems} />
                </Flex>
        </Flex>)
}
