"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { RiNextjsFill } from "react-icons/ri";

const Navbar = () => {
    const currentlink= usePathname()
    const link = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Issues', href: '/issues' },
        { label: 'Pull Requests', href: '/pullrequests' },
        { label: 'Actions', href: '/actions' },
    ]
    return (
        <nav className="flex font-semibold  space-x-6 items-center h-16 px-4 border-b mb-4">
            <Link className="" href="/" ><RiNextjsFill /></Link>
            <ul className="flex space-x-6">
                {link.map(link =>
                    <Link key={link.href}
                        className={`${link.href===currentlink ? 'text-zinc-900': "text-zinc-500"} hover:text-zinc-800 transition-colors`} href={link.href}>{link.label}</Link>)}

            </ul>

        </nav>
    )
}

export default Navbar