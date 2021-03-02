import Link from "next/link";

const cars = ({ cars }) => {
  return (
    <>
      <h1>Pagina de listagem de carros</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Voltar para home</a>
          </Link>
        </li>
      </ul>

      <ul style={{ border: "solid 1px black" }}>
        {cars.map((car, index) => {
          return (
            <>
              <li key={index}>{car.nome}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export async function getStaticProps(context) {
  const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`);
  const result = await response.json();

  return {
    props: { cars: result }, // will be passed to the page component as props
  };
}

export default cars;
