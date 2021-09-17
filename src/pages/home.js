
import styles from '../styles/Homepage.module.css'
import Card from '../components/card'
import Main from '../components/main'



export default function Home() {

 
  return (
    <>
      <div className={styles.main}> 
      <section>
      <Main />
      <Card color={true} />
      <Card color={true} />
      <Card color={true} />
      <Card color={true} />
      <Card color={true} />
      <Card color={true} />
      </section>
      </div>
    </>
    )
}

