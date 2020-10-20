function Dinamic({id}){
return( <p>estas en: {id}</p>)
}

export default Dinamic;

export function getServerSideProps({params}){
  
  return{
    props: {
      id: params.id,
    }
  }
}