export default function Prueba({name}){
return( <p>Hola me llamo {name}</p>)
}

export async function getStaticProps(){
  const data = await fetch("https://api.github.com/users/Ciervos")
  const json = await data.json();

  return{
    props:{
      name: json.login
    }
  };
}