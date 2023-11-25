import Features from './Features/Features'
import Tool from './Tool/Tool'
import Quiz from './Quiz/Quiz'
import ClassManagement from './Class/ClassManagement'
import Discuss from './Discuss/Discuss'


export default function OurFeatures(){
    return(
        <section className='max-w-screen-2xl mx-auto pb-[160px]'>
            <Features></Features>
            <Tool></Tool>
            <Quiz></Quiz>
            <ClassManagement></ClassManagement>
            <Discuss></Discuss>
            <div className='w-full text-center'>
                <button className="text-[16px] lg:text-[24px] border-2 border-orange-500 text-orange-500 bg-transparent hover:bg-orange-600 hover:text-white px-5 lg:px-10 py-2 lg:py-5 rounded-full mr-4 lg:mr-10 mx-auto">See more features</button>
            </div>
        </section>
    )
}