import Head from "next/head";
export default function about({items}) {
 
  return (
    <div>
      <Head>
        <title>shipping</title>
      </Head>
      <h1>We expand</h1>
      <h3>here i display the countries that we deliever (from an other api) </h3>
      {items.results.map((item) => <p>{item.address.city_name}</p>)}
    </div>
  );
}
export const getStaticProps = async ()  => {
  const res= await fetch('https://api.mercadolibre.com/sites/MLA/search?q=moviles')
  const items = await res.json()
  return {
    props: {
      items
    }
  }
}

