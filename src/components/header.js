import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image, Input, Icon, Spacer } from '@chakra-ui/react'
import  {RiSearchLine} from 'react-icons/ri';

const logo = '../../public/logo192.png'

export const Header = () => {

    return (
      
        <Flex as='header' bgGradient='linear(to-r, red.100, blue.200)' maxWith={1488} h='20' mx='auto' mt='0'px='8' align='center' w='100%'>
            <Image alignSelf='center' src='Logo.png' alt="Logo" objectFit="cover"
            boxSize='70px' />
             <Spacer w='70px' />
        <Flex
        as='label'
        flex='1'
        py='3'
        px='6'
        nl='6'
        maxWidth={280}
        alignSelf='Center'
        color='green.400'
        position='relative'
        bg='blue.100'
        borderRadius='full'
        >
           
            <Input color='blue.900'
            variant='unstyled'
            px='3'            
            mr='4'
            placeholder='Buscar por Itens'
            _placeholder={{color: 'blue.900'}}></Input>
            <Icon as={RiSearchLine} fontSize='20' color='blue.900' />
         </Flex>
        </Flex>
    )
};