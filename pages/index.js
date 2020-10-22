import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useState} from 'react'




export default function Home({blogs}){

  return(<>
  {blogs.map((blog,key)=>{
    return(<div key={key}><h1>{blog.title}</h1> 
    <h2>By {blog.user.username}</h2>
      <p>{blog.description}</p></div>
     )
  })}
  
  </>)
}

export async function getStaticProps(){
  const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1")
  const json = await data.json();

  return{
    props:{
      blogs: json,
    }
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
