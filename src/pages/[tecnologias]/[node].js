import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function PageWithDynamicRoute() {
  const router = useRouter();
  // console.log(router)
  // roteamento dinamico
  return (
    <>
      <h1>{`${router.query.tecnologias}-${router.query.node}`}</h1>
      <ul style={{ border: "solid 1px black" }}>
        <li>
          <Link href="/">
            <a>Voltar para home</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
