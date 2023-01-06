export default function Home(props) {
  console.log("PROPS: ", props);
  return <div>Next JS &amp; WordPress course. Test</div>;
}

export const getStaticProps = async () => {
 const {data} = await client.query({
   query: gql`
   query NewQuery {
     pages {
       nodes {
         title
       }
     }
   }
   `
 })
  return {
    props: {
      data,
      myexampleprop: "test",
    },
  };
};