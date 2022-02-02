import React from 'react';
import Styles from './modal.module.css'



const ProductModal = ({Open ,setModal}) => {

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    const clooseModel = () => {
        setModal(!true)
    }

    return (
      <>
        <div className={Styles.modal}>
            <div className={Styles.modal_content}>
                <div className={Styles.modal_header}>
                    <div className={Styles.modal_header_title}>
                        <h2>Product Details</h2>
                    </div>
                    <div className={Styles.modal_header_close}>
                        <button onClick={clooseModel}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6L18 6M6 18L18 18M6 12L18 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={Styles.modal_body}>
                    <div className={Styles.modal_body_image}>
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                      </div>
                      </div>
                      </div>
                      </div>
                    
    </>
    )   
}


export default ProductModal