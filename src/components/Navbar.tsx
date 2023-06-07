import Link from "next/link";


const Navbar = ( ) => {
    const homeStyle = 'px-4 py-2 text-lg font-semibold tracking-wider text-cyan-500 hover:shadow-md skew-x-2'
    const p5 = 'px-4 py-2 text-lg font-semibold tracking-wider text-cyan-500 shadow hover:text-black hover:bg-white bg-clip-border hover:bg-clip-padding'

    return (
        <div className='w-full p-6 bg-slate-800 outline-state-50 shadow fixed transition ease-in-out duration-75 backdrop-blur-md'>
            <div className='flex justify-between'>
                <Link href={'/'} className={homeStyle}>
                    <svg className="h-12 w-32 absolute bottom-0 -left-1 stroke-cyan-500 stroke-[4px] hover:stroke-[6px] animate-pulse">
                        <rect x='0' y='0' width='100%' height='100%' fill='none'></rect>
                    </svg>
                    RICHEEK
                </Link>
                <div className="flex break-before-column">
                    <Link href={'#about-me'} className=' px-4 py-2 text-lg font-semibold tracking-wider text-cyan-500 shadow hover:text-black hover:bg-white hover:backdrop-blur-lg drop-shadow-lg hover:mix-blend-multiply'>ABOUT ME</Link>
                    <Link href={'#projects'} className={p5}>PROJECTS</Link>
                    <Link href={'#work'} className={p5}>WORK</Link>
                    <Link href={'#contact'} className={p5}>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;