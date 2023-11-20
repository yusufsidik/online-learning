export default function Quiz(){
    return (
        <section className="max-w-screen-2xl mx-auto pb-[160px]">
            <div className="flex flex-col md:flex-row lg:justify-between">
                <div className="max-w-[617px] w-full order-2 lg:order-1 gap-6 lg:gap-0">
                    <img src="/img/quiz-image.png" className="lg:ml-[-46px] w-full" />
                </div>
                <div className="self-center order-1 lg:order-2">
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-semibold">Assessments, <span className="text-[#F48C06]"><br />Quiz,</span> Tests</h1>
                    <p className="text-[18px] lg:text-[24px] text-[#696984] max-w-[596px] mt-[20px] lg:mt-[30px] mx-auto mb-[114px] lg:mb-0">Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
                </div>
            </div>
        </section>
    )
}