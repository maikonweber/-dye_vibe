import React from 'react';
import Styles from './modal.module.css'



const ProductModal = ({Open ,setModal, product, description, img, quantidade, valor}) => {

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    const clooseModel = () => {
        setModal(!true)
    }

    return (
      <>
        <div className={Styles.modal}>
            <div className={Styles.modal_content}>

            
                <div className={Styles.modal_header}>
                <button className={Styles.close} onClick={clooseModel}>&times;</button>
                    <div className={Styles.modal_header_title}>
                        <h2>{product}</h2>
                    </div>
                </div>
                <div className={Styles.modal_body}>
                
                <div className={Styles.modal_body_image}>
                        <img src={img} alt=""/>
                      </div>
                      <div className={Styles.description}>{description}</div>
                        <div className={Styles.quantidade}>{`Quantidade : ${quantidade}`}</div>
                        <div className={Styles.valor}>{valor}</div>
                      <button className={Styles.btn}>Add to cart</button>
                      </div>
                      </div>
                      </div>
                    
    </>
    )   
}


export default ProductModal