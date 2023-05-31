import Link from "next/link";


const Navbar = ( ) => {


    return (
        <div className='w-full p-6 bg-black outline-state-50 shadow '>
            <div className='flex'>
                <Link href={'/'} className=' px-4 py-2 text-lg font-semibold tracking-wider text-cyan-500 shadow hover:text-black hover:bg-white'>RICHEEK</Link>
                <Link href={'#aboutme'} className=' px-4 py-2 text-lg font-semibold tracking-wider text-cyan-500 shadow hover:text-black hover:bg-white'>ABOUT ME</Link>
                <Link href={'#projects'} className=' px-4 py-2 text-lg font-semibold tracking-wider text-cyan-500 shadow hover:text-black hover:bg-white'>PROJECTS</Link>
                <Link href={'#work'} className=' px-4 py-2 text-lg font-semibold tracking-wider text-cyan-500 shadow hover:text-black hover:bg-white'>WORK</Link>
                <Link href={'#contact'} className=' px-4 py-2 text-lg font-semibold tracking-wider text-cyan-500 shadow hover:text-black hover:bg-white'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Navbar;