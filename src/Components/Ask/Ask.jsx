export default function Benefit(){
    return(
        <section className="max-w-screen-2xl mx-auto pb-[150px]">
            <div>
                <div className="mb-[153px] text-center">
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-bold mb-[20px]">What is <span className="text-[#F48C06]">Skilline</span></h1>
                    <p className="text-[18px] lg:text-[24px] max-w-[1101px] mx-auto">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                </div>
                <div className="flex justify-center gap-28 lg:gap-8 text-center flex-wrap">
                    <div className="relative w-full max-w-[400px] lg:max-w-[600px] flex justify-center flex-col items-center">
                        <h1>FOR INSTRUCTORS</h1>
                        <button className="bg-transparent border-2 border-white rounded-full mt-[17px]">Start a class today</button>
                        <img src="/img/for-instructors.jpg" className="absolute top-0 bottom-0 left-0 right-0 z-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}