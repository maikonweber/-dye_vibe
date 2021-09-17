import {useState} from 'react'
import { AiOutlineMenu, AiFillSkin,  } from 'react-icons/ai';
import styles from '../styles/header.module.css';
import { RiShirtLine } from 'react-icons/ri';
import { GiShorts, GiBilledCap, GiShoppingCart, GiTShirt, GiSleevelessTop, GiShirt } from 'react-icons/gi';

export default function Header({})  {
    // useState
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleMenu = () => { setIsOpen(!isOpen) }
  const toogleCart = () => { setIsOpenCart(!isOpen) }  

    return (
        <>
        <header className={styles.header}>
            <h1>
               Dye Vibe
            </h1>
        </header>
        <AiOutlineMenu onClick={toggleMenu} className={styles.button} /> 
        <GiShoppingCart onClick={toogleCart} className={styles.shopButton} />
          <nav className={!isOpen ? styles.nav : styles.navshow}>
          <ul className={styles.lista}>
              <li className={styles.itens}>
                    <AiFillSkin className={styles.icon} />
              </li>
              <li className={styles.itens}>
                    <RiShirtLine className={styles.icon} /> 
              </li>
              <li className={styles.itens}>
                    <GiShorts className={styles.icon} />         
              </li>
              <li className={styles.itens}>
                    <GiBilledCap className={styles.icon} />         
              </li>
              <li className={styles.itens}>
                    <GiSleevelessTop className={styles.icon} />         
              </li>
              <li className={styles.itens}>
                    <GiShirt className={styles.icon} />         
              </li>
              <li className={styles.itens}>
                    <GiTShirt className={styles.icon} />         
              </li>
          </ul>
      </nav>
        </>
    );
}
