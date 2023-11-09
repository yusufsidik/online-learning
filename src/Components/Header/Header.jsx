export default function Header(){
    return (
        // FFF2E1
        <section className="max-w-screen-2xl mx-auto h-full">
            <section className="h-full relative z-10 rounded-b-full">
                <div className="flex justify-between bg-[#FFF2E1] items-center">
                    <div className="w-full lg:w-5/12 py-16 lg:py-0">
                        <h1 className="font-bold text-[38px] lg:text-[54px] text-[#2F327D]"><span className="text-[#F48C06]">Studying</span> Online is now much easier</h1>
                        <p className="text-[16px] lg:text-[24px] mt-[20px] lg:mt-[34px]">Skilline is an interesting platform that will teach you in more an interactive way</p>
                        <div className="mt-[34px] lg:mt-[52px]">
                            <button className="text-[16px] lg:text-[24px] text-white bg-orange-500 hover:bg-orange-600 px-5 lg:px-10 py-2 lg:py-5 rounded-full mr-4 lg:mr-10">Join for free</button>
                            <button>
                                <img src="/img/play-button.png" className="w-[50px] lg:w-[80px] inline mr-4 lg:mr-10" />
                                <span className="text-[16px] lg:text-[24px]">Watch how it works</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-6/12 hidden lg:flex justify-center relative">
                        <img src="/img/teenage-header.png" className="max-w-[540px]"/>
                        <img src="/img/statistik-icon.png" className="absolute top-[25%] right-[100px] max-w-[120px]" />
                        <div className="px-5 py-3 bg-white bg-opacity-70 rounded-2xl flex gap-4 justify-between items-center absolute top-[30%] left-0">
                            <img src="/img/calender-icon.png" className="max-w-[50px]" />
                            <div className="text-[20px]">
                                <span className="block">250k</span>
                                <span>Assisted Student</span>
                            </div>
                        </div>
                        <div className="px-5 py-4 bg-white bg-opacity-70 rounded-2xl flex gap-5 justify-between items-start absolute bottom-[10%] left-0">
                            <img src="/img/user-icon.png" className="max-w-[56px]" />
                            <div className="text-[20px]">
                                <span className="block text-[20px] font-medium">User Experience Class</span>
                                <span className="text-[18px]">Today at 12:00 PM</span>
                                <button className="px-8 py-3 bg-[#D8587E] hover:bg-pink-500 text-white text-[20px] block mt-[19px] rounded-full">Join Now</button>
                            </div>
                        </div>
                        <div className="px-5 py-3 bg-white bg-opacity-70 rounded-2xl flex gap-4 justify-between items-center absolute bottom-[40%] right-0">
                            <img src="/img/email-icon.png" className="max-w-[50px]" />
                            <div>
                                <span className="block text-[20px] font-medium">Congratulations</span>
                                <span className="text-[18px]">Your admissions completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}