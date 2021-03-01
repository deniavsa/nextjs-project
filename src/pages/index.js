import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* roteamento estatico */}
      <Link href="/teste">
        <a>Navegar para pagina teste</a>
      </Link>
      
      <Link href="/tecnologias/node">
        <a>Navegar para pagina node</a>
      </Link>
    </>
  );
}
