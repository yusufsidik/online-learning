export default function Everything(){
    return(
        <section className="max-w-screen-2xl mx-auto pb-[160px]">
            <div className="flex justify-between flex-col lg:flex-row gap-8 lg:gap-2">
                <div className="relative z-10">
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-semibold mb-[20px] relative z-20">Everything you can do in a physical classroom, <br /><span className="text-[#F48C06]">you can do with Skilline</span>
                    </h1>
                    <p className="text-[18px] lg:text-[24px] text-[#696984] max-w-[730px] mt-[30px] mb-[30px]">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <a href="" className="underline text-[#696984] hover:text-black text-[16px] lg:text-[22px]">Learn more</a>
                    <img src="/img/elipse.png" className="w-[73px] absolute top-[-13px] left-[-25px]" />
                </div> 
                <div className="max-w-[705px] w-full relative before:hidden md:before:block before:absolute before:w-[138px] before:h-[138px] before:bg-[#23BDEE] before:rounded-[20px] before:top-[-20px] before:left-[-20px] after:hidden md:after:block after:absolute after:w-[231px] after:h-[231px] after:bg-[#F3AC50] after:rounded-[20px] after:bottom-[-20px] after:right-[-20px]">
                    <img src="/img/image-video.jpg" className="rounded-[20px] relative z-10" loading="lazy"/>
                    <img src="/img/play-button.png" className="absolute w-[50px] lg:w-[70px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer z-20" />
                </div>
            </div>
        </section>
    )
}