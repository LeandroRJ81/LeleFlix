import Link from "next/link";

export function Header() {
  return (
    <>
        <header className="flex p-6 bg-zinc-900 text-white items-center justify-between w-full">
            <div>
                <h1 className="text-yellow-300 font-bold">
                    LeleFlix
                </h1>
            </div>

            <nav>
                <ul className="flex items-center justify-center gap-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/movie">Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  );
}
