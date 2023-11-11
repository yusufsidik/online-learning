export default function Benefit(){
    return(
        <section className="max-w-screen-2xl mx-auto pb-[160px]">
            <div>
                <div className="mb-[153px] text-center">
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-bold mb-[20px]">All-In-One <span className="text-[#F48C06]">Cloud Software</span></h1>
                    <p className="text-[18px] lg:text-[24px] text-[#696984]">Skilline is one powerful online software suite that combines all the <br /> tools needed to run a successful school or office.</p>
                </div>
                <div className="flex justify-center gap-28 lg:gap-8 text-center flex-wrap">
                    {/* card */}
                    <div className="max-w-[450px] pt-[50px] lg:pt-[120px] px-[35px] lg:px-[55px] pb-[30px] lg:pb-[50px] relative shadow-xl rounded-[20px]">
                        <img src="/img/benefit-icon-1.png" className="max-w-[70px] lg:max-w-[100px] absolute top-[-50px] left-[50%] translate-x-[-50%]" />
                        <h4 className="text-[24px] lg:text-[30px] text-[#2F327D] font-medium">Online Billing, Invoicing & Contracts </h4>
                        <p className="mt-[24px] text-[#696984] text-[18px] lg:text-[20px]">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                    </div>
                    <div className="max-w-[450px] pt-[50px] lg:pt-[120px] px-[35px] lg:px-[55px] pb-[30px] lg:pb-[50px] relative shadow-xl rounded-[20px]">
                        <img src="/img/benefit-icon-2.png" className="max-w-[70px] lg:max-w-[100px] absolute top-[-50px] left-[50%] translate-x-[-50%]" />
                        <h4 className="text-[24px] lg:text-[30px] text-[#2F327D] font-medium">Easy Scheduling & Attendance Tracking </h4>
                        <p className="mt-[24px] text-[#696984] text-[18px] lg:text-[20px]">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                    </div>
                    <div className="max-w-[450px] pt-[50px] lg:pt-[120px] px-[35px] lg:px-[55px] pb-[30px] lg:pb-[50px] relative shadow-xl rounded-[20px]">
                        <img src="/img/benefit-icon-3.png" className="max-w-[70px] lg:max-w-[100px] absolute top-[-50px] left-[50%] translate-x-[-50%]" />
                        <h4 className="text-[24px] lg:text-[30px] text-[#2F327D] font-medium">Customer Tracking </h4>
                        <p className="mt-[24px] text-[#696984] text-[18px] lg:text-[20px]">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
                    </div>
                </div>
            </div>
        </section>
    )
}