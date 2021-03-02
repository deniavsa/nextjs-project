import Link from "next/link";
import axios from "axios";

const Home = ({ users }) => {
  console.log(users);
  return (
    <>
      <h1>Home</h1>
      {/* roteamento estatico */}
      <ul>
        <li>
          <Link href="/cars">
            <a>
              Navegar para página de listagem de carros - (página estática com
              roteamento estático)
            </a>
          </Link>
        </li>
        {/* roteamento dinãmico */}
        <li>
          <Link href="/tecnologias/node">
            <a>Navegar para pagina estatica com rota dinamica(exemplo)</a>
          </Link>
        </li>
      </ul>

      <ul style={{ border: "solid 1px black" }}>
        <h2>
          Navegar para página estática de usuários por ID - (roteamento
          dinâmico)
        </h2>
        {users.map((user, index) => {
          return (
            <>
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

// Assim que a aplicação começa e procura e processa as informações
//Unica diferença entre getStaticProps e getServerSidePros é que a segunda respectivamente baixar as informações a cada request

export const getServerSideProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const result = await response.json();
  // console.log(result);

  //retorna um array de usuarios como props para a Home
  return {
    props: { users: result },
  };
};

export default Home;
