import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
    return (
        <>
            <aside className="w-1/6 h-screen bg-gray-800 text-white">
                <div className="bg-white m-2 mt-0">
                    <Image src="/cosisa.jpg" alt="Logo" width={150} height={50} className="mx-auto mb-4" />
                </div>
                <nav className="p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/" className="text-4xl block p-2 rounded hover:bg-gray-700">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/empleados" className="text-4xl block p-2 rounded hover:bg-gray-700">Empleados</Link>
                        </li>
                        <li>
                            <Link href="/calendario" className="text-4xl block p-2 rounded hover:bg-gray-700">Calendario</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}