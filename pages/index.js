import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useState} from 'react'

export default function Home() {
  const [texto,setTexto] = useState("default")
  
  function handleChange(e){
   setTexto(e.target.value)
  } 


  return (
    <div className={styles.container}>
      <input onChange={handleChange} type="text"/>
      <Link href={`/prueba/${texto}`}>Click me</Link>
    </div>
  )
}
