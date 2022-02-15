import React, { useEffect } from 'react';
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
    Box, 
    Text,

  
  } from "@chakra-ui/react"


const logo = '../../public/logo192.png'

export const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [cart, setCart] = React.useState([]);
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
        console.log(cartObj)
        if(cartObj === null){
            return []
        }else{
            return setCart(cartObj)
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

    const clearCart = () => {
      // Clear cart in localStoage 
      localStorage.removeItem('cart')
      // Clear cart in state
    }

    const selectCartandRemove = (id) => {
      setCart(cart.filter((item, index) => index !== id))
      
    

    }

    useEffect(() => {
      



    }, [cart])


    useEffect(() => {
      getAllCart()

    }, [getAllCartLength()])
        
      

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
            {cart.map((item, index ) => (
              <Box mt='2' w='270px' h='130px' > 
              <Image src={item.img} 
               borderRadius='full'
               boxSize='75px'>
              </Image>
              <Text fontSize='20px' mt='2' >{item.name}</Text>
              <Text fontSize='xs'>{item.product}</Text>
              <Text fontSize='xs'>{item.valor}</Text>
              <Button variantColor='red' onClick={() => selectCartandRemove(index) }> Remover </Button>

            </Box>
            
            ))}
          </DrawerBody>
         
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={() => clearCart() }>
              Cancelar tudo
            </Button>
            <Button colorScheme="blue"> Check In </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Flex>
    )
}
