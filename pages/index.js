export default function Home({arr}) {
  return (
    <>
   <h1>hello world</h1>
   <h1>{arr}</h1>
   </>
  )
}

export async function getStaticProps(){
  const arr=1
  return{
    props:{
      arr
    }
  }
}
