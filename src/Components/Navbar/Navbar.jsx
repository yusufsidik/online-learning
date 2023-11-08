import { useState } from "react"

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);


    return(
        <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-2xl mx-auto gap-6 md:gap-0 bg-[#FFF2E1]">
            <div className="flex justify-between px-4 py-4 w-full md:w-fit">
                <img src="/img/logo-skilline.png" className="cursor-pointer w-[80px] md:w-[150px]" />
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </div>  
            <div className={`${!isOpen ? "hidden" : "flex"} lg:flex flex-col md:flex-row justify-end items-center gap-8 md:gap-14 w-full px-4 md:px-0`}>
                <div className="flex flex-col md:flex-row gap-6 items-center md:gap-14">
                    <a className="md:text-[22px] text-sky-950 hover:text-sky-700 cursor-pointer">Home</a>
                    <a className="md:text-[22px] text-sky-950 hover:text-sky-700 cursor-pointer">Careers</a>
                    <a className="md:text-[22px] text-sky-950 hover:text-sky-700 cursor-pointer">Blog</a>
                    <a className="md:text-[22px] text-sky-950 hover:text-sky-700 cursor-pointer">About Us</a>
                </div>
                <div className="flex justify-center gap-4">
                    <button className="bg-white hover:bg-slate-100 md:text-[22px] px-10 py-2 border-none rounded-full active:border-none">Login</button>
                    <button className="bg-[#F48C06] hover:bg-orange-400 md:text-[22px] text-white px-10 py-2 rounded-full active:border-none">Sign Up</button>
                </div>
            </div>
        </div>
    )
}