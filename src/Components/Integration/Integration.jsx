export default function Integration(){
    return(
        <section className="max-w-screen-2xl mx-auto pb-[160px]">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="max-w-[478px] w-full order-2 lg:order-1 gap-6 lg:gap-0">
                    <div className="w-full flex flex-wrap justify-between gap-y-[60px]">
                        <img src="/img/icon-onedrive.png" className="max-w-[228px] object-contain" />
                        <img src="/img/icon-dropbox.png" className="max-w-[130px] object-contain" />
                        <img src="/img/icon-gdrive.png" className="max-w-[138px] object-contain" />
                        <img src="/img/icon-team.png" className="max-w-[159px] object-contain" />
                    </div>
                </div>
                <div className="self-center order-1 lg:order-2">
                    <div className="flex items-center gap-x-4">
                        <span className="w-[80px] h-[2px] block border-2 border-[#525596]"></span>
                        <span className="text-[#525596] text-[16px] lg:text-[20px]">INTEGRATIONS</span>
                    </div>
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-semibold mt-[30px]">200+ educational tools and platform<br /> <span className="text-[#F48C06]"> integrations </span></h1>
                    <p className="text-[18px] lg:text-[24px] text-[#696984] max-w-[596px] mt-[20px] lg:mt-[30px] pb-[44px]">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                    <button className="text-[16px] lg:text-[24px] border-2 border-orange-500 text-orange-500 bg-transparent hover:bg-orange-600 hover:text-white px-5 lg:px-10 py-2 lg:py-5 rounded-full">See all integrations</button>
                </div>
            </div>
        </section>
    )
}