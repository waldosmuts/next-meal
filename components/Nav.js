import Link from "next/link"

export default function Nav() {
    return (
        <nav className="bg-black text-white px-12 flex items-center justify-between">
            <Link href="/"><button className="px-4 py-6 transition duration-300"><span className="font-bold">Next</span> Meal</button></Link>
            <Link href="/meals"><button className="px-4 py-6 transition duration-300">Meals</button></Link>
        </nav>
    )
}