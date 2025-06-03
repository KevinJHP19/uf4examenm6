import Link from 'next/link';

export default function Header() {
    console.log( "header cargado");


    return (
        <header className="bg-black textwhte p-4">
            <div className="container">
                <h1>Kevin Jordan Huaman</h1>
                <div className="flex aling-center justify-between"> 
                    <Link href="/" className="text-white font-bold text-lg">
                        Home
                    </Link>
                    <Link href="/movieexplorer" className= "flex items-center text-white font-bold">
                    MovieExplorer
                    </Link>
                    <Link href= "/about" className="text-white font-bold "> 
                    About
                    </Link>
                </div>
            </div>
        </header>
    )
}