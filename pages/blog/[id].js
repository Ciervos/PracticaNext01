function Postblog({id,title,tags,bodyhtml,bodymark}){
  return( <>
  
  <h1>{title}</h1>
  
  <p dangerouslySetInnerHTML={{__html: bodyhtml}}></p>
  
  </>
  )
  }
  
  export default Postblog;


  export async function getStaticPaths() {
    const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1");
    const json = await data.json();
  
    // const paths = json.map(path => `/blog/${path.id}`)
  
    const paths = json.map((path) => {
      return `/blog/${path.id}`;
    });
  
    return {
      paths: paths,
      fallback: false
    };
  }
  
  export async function getStaticProps({params}){
    const data = await fetch(`https://dev.to/api/articles/${params.id}`)
    const json = await data.json();
    
    return{
      props: {
        id: params.id,
        title: json.title,
        tags: json.tags,
        bodyhtml: json.body_html,
        bodymark: json.body_markdown,
      },
      revalidate: 3600,
    };
  }

  //https://dev.to/api/articles/id