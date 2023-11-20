export default function Discuss(){
    return (
        <section className="max-w-screen-2xl mx-auto pb-[160px]">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="max-w-[755px] w-full order-2 lg:order-1 gap-6 lg:gap-0">
                    <img src="/img/image-discuss.png" className="lg:ml-[-46px] w-full" />
                </div>
                <div className="self-center order-1 lg:order-2">
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-semibold">One-on-one <br /> <span className="text-[#F48C06]"> Discussions </span></h1>
                    <p className="text-[18px] lg:text-[24px] text-[#696984] max-w-[596px] mt-[20px] lg:mt-[30px] mx-auto">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </div>
            </div>
        </section>
    )
}