import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'
import styles from '../styles/Home.module.scss'




export default function Home({blogs}){

  return(<main className={styles.main}>
  {blogs.map((blog,key)=>{
    return(<Link href={`/blog/${blog.id}`}><div className={styles.container} key={key}><h1>{blog.title}</h1> 
    <h2>By {blog.user.username}</h2>
      <p>{blog.description}</p></div></Link>
     )
  })}
  
  </main>)
}

export async function getStaticProps(){
  const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1")
  const json = await data.json();

  return{
    props:{
      blogs: json,
    },
    revalidate: 60*60,
  };
}



// export default function Home() {

  
// //   const [texto,setTexto] = useState("default")
  
// //   function handleChange(e){
// //    setTexto(e.target.value)
// //   } 


// //   return (
// //     <div className={styles.container}>
// //       <input onChange={handleChange} type="text"/>
// //       <Link href={`/prueba/${texto}`}>Click me</Link>
// //     </div>
// //   )
// // }
