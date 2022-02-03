import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image, Input, Icon, Spacer, Button, useDisclosure } from '@chakra-ui/react'
import  {RiSearchLine} from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import {BsPeopleCircle} from 'react-icons/bs';
import {HiOutlineShoppingCart } from 'react-icons/hi';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"


const logo = '../../public/logo192.png'

export const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();


    const getAllCartLength = () => {
        const cart = localStorage.getItem('cart')
        const cartObj = JSON.parse(cart)
        if(cartObj === null){
            return 0
        }else{
            return cartObj.length
        }
    }

    const getAllCart = () => {
        const cart = localStorage.getItem('cart')
        const cartObj = JSON.parse(cart)
        if(cartObj === null){
            return []
        }else{
            return cartObj
        }
    }

    const getSomeValorCart = () => {
      const cart = getAllCart()
       // For each cart valor sum
      let sum = 0
      cart.forEach(item => {
        sum += item.valor
      }
      )      
      return sum
    }

    


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
         <Icon as={BsPeopleCircle} ml='6' fontSize='25' color='blue.900' onClick={console.log('her')} />
         <Icon as={HiOutlineShoppingCart} ml='6'fontSize='25' color='blue.900' onClick={onOpen} />
         <Icon as={GiHamburgerMenu} ml='6'
         fontSize='25' color="blue.900" onClick={console.log('aaa')}>
      </Icon>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> Carrinho de Compra. </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Procure pelo seu produto" />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar tudo
            </Button>
            <Button colorScheme="blue"> Check In </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Flex>
    )
};