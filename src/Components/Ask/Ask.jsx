export default function Benefit(){
    return(
        <section className="max-w-screen-2xl mx-auto pb-[150px]">
            <div>
                <div className="mb-[153px] lg:mb-[80px] text-center">
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-bold mb-[20px]">What is <span className="text-[#F48C06]">Skilline</span></h1>
                    <p className="text-[18px] lg:text-[24px] text-[#696984] max-w-[1101px] mx-auto">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online, manage assignments, quizzes and exams, monitor due dates, grade results and provide students with feedback all in one place.</p>
                </div>
                <div className="flex justify-center gap-6 lg:gap-8 text-center flex-wrap">
                    <div className="relative w-full max-w-[400px] lg:max-w-[600px] flex justify-center flex-col items-center after:absolute after:bg-black after:w-full after:h-full after:bg-opacity-30 after:rounded-[20px] overflow-hidden">
                        <div className="absolute z-10">
                            <h1 className="text-[24px] lg:text-[32px] text-white font-semibold">FOR INSTRUCTORS</h1>
                            <button className="bg-transparent hover:bg-[#23BDEE] hover:border-transparent text-white text-[16px] lg:text-[22px] py-3 px-6 border-2 border-white rounded-full mt-[17px]">Start a class today</button>
                        </div>
                        <img src="/img/for-instructors.jpg" />
                    </div>
                    <div className="relative w-full max-w-[400px] lg:max-w-[600px] flex justify-center flex-col items-center after:absolute after:bg-black after:w-full after:h-full after:bg-opacity-30 after:rounded-[20px]">
                        <div className="absolute z-10">
                            <h1 className="text-[24px] lg:text-[32px] text-white font-semibold">FOR STUDENTS</h1>
                            <button className="bg-transparent hover:bg-[#23BDEE] hover:border-transparent text-white text-[16px] lg:text-[22px] py-3 px-6 border-2 border-white rounded-full mt-[17px]">Enter access code</button>
                        </div>
                        <img src="/img/for-students.jpg" />
                    </div>
                </div>
            </div>
        </section>
    )
}