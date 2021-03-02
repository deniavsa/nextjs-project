import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

function Profile({ user }) {
  const router = useRouter();

  if (router.isFallback) return <h1>carregando...</h1>;

  return (
    <>
      <ul style={{ border: "solid 1px black" }}>
        <li>
          <Link href="/">
            <a>Voltar para home</a>
          </Link>
        </li>
      </ul>

      <ul style={{ border: "solid 1px black" }}>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.username}</li>
      </ul>
    </>
  );
}

export const getStaticProps = async (context) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
    { params: { id: context.params.id } }
  );
  const user = await response.data[0];

  return {
    props: { user, revalidate: 10 }, // will be passed to the page component as props
  };
};

export const getStaticPaths = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.data.slice(0, 5);

  const paths = users.map((user) => {
    return { params: { id: String(user.id) } };
  });

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
};

export default Profile;
