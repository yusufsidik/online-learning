export default function Features(){
    return (
        <section className="max-w-screen-2xl mx-auto pb-[160px]">
            <div>
                <div className="mb-[60px] lg:mb-[100px] text-center">
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-semibold">Our<span className="text-[#F48C06]"> Features</span></h1>
                    <p className="text-[18px] lg:text-[24px] text-[#696984] max-w-[888px] mt-[20px] lg:mt-[30px] mx-auto">This very extraordinary feature, can make learning activities more efficient</p>
                </div>

                <div className="flex justify-between flex-col lg:gap-[126px] md:flex-row">
                    <div className="max-w-[896px] relative">
                        <img src="/img/features.png" className="w-full relative z-10" />
                        <img src="/img/features-elipse-1.png" className="max-w-[190px] absolute top-[-76px] left-[63px]" />
                        <img src="/img/features-elipse-2.png" className="max-w-[293px] absolute bottom-[-52px] right-[25px]" />
                    </div>
                    <div>
                        <h1 className="text-[#2F327D] text-[28px] lg:text-[38px] font-semibold">A <span className="text-[#F48C06]">user interface</span> designed for the classroom </h1>
                        <ul className="flex flex-col gap-y-[40px] mt-[40px] pl-[10px]">
                            <li className="flex gap-[30px] lg:gap-[60px] items-center">
                                <img src="/img/features-icon-1.png" className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px]" />
                                <p className="text-[#696984] text-[16px] lg:text-[22px] max-w-[443px]">Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                            </li>
                            <li className="flex gap-[30px] lg:gap-[60px] items-center">
                                <img src="/img/features-icon-2.png" className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px]" />
                                <p className="text-[#696984] text-[16px] lg:text-[22px] max-w-[443px]">TA’s and presenters can be moved to the front of the class.</p>
                            </li>
                            <li className="flex gap-[30px] lg:gap-[60px] items-center">
                                <img src="/img/features-icon-3.png" className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px]" />
                                <p className="text-[#696984] text-[16px] lg:text-[22px] max-w-[443px]">Teachers can easily see all students and class data at one time.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}