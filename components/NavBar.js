import Link from "next/link";

export default function NavBar (){

    return (
        <div className="">
            <nav className="max-w-6xl mx-auto text-white">
                <ul className="flex sm:flex-row flex-col gap-2 ">
                    <li className="font-bold text-sm  border-t-4 hover:border-primary p-6 border-transparent duration-500">
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className="font-bold text-sm border-t-4 hover:border-primary p-6 border-transparent duration-500">
                        <Link href={'/'}>Services</Link>
                    </li>
                    <li className="font-bold text-sm border-t-4 hover:border-primary p-6 border-transparent duration-500">
                        <Link href={'/'}>Projects</Link>
                    </li>
                    <li className="font-bold text-sm border-t-4 hover:border-primary p-6 border-transparent duration-500">
                        <Link href={'/'}>About Us</Link>
                    </li>
                    <li className="font-bold text-sm border-t-4 hover:border-primary p-6 border-transparent duration-500">
                        <Link href={'/'}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}