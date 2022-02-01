import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'



const ProductModal = ({Open ,setModal}) => {

    const clooseModel = () => {
        setModal(!true)
    }

    return (
        <Modal isOpen={Open} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton onClick={clooseModel} />
          <ModalBody>
        </ModalBody>
                <ModalFooter>

                </ModalFooter>
                </ModalContent>
                </Modal>
    )   
}


export default ProductModal