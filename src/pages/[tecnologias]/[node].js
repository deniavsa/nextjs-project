
import { useRouter } from "next/router";

export default function PageWithDynamicRoute() {
    const router = useRouter()
    console.log(router)
    // roteamento dinamico
    return (
        <h1>{`${router.query.tecnologias}-${router.query.node}`}</h1>


    )
  }
  