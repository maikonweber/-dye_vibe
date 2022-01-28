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
                <Flex w='100%' my='6' h='80vh' maxWidth={1480} mx='auto' px='6' > 
                <SimpleGrid w='100%' h='80vh' columns={[1, 1, 2, 3]} spacing={10} maxWidth={[300, 400, 1250, 1650]}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>

                </SimpleGrid>
                </Flex>
            </Flex>)
}
