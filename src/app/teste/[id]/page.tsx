import { Link } from "next-view-transitions";

export default function Teste(){
    return <main className="flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/teste">Teste</Link>
        <Link href="/teste/2">Teste 2</Link>
    </main>
}