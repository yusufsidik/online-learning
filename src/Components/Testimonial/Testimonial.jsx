import TestimonialCard from "./TestimonialCard";


import { Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function Testimonial(){
    return(
        <section className="max-w-screen-2xl mx-auto pb-[160px]">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="md:w-6/12">
                    <div className="flex items-center gap-x-4">
                        <span className="w-[80px] h-[2px] block border-2 border-[#525596]"></span>
                        <span className="text-[#525596] text-[16px] lg:text-[20px]">TESTIMONIAL</span>
                    </div>
                    <h1 className="text-[28px] lg:text-[36px] text-[#2F327D] font-semibold mt-[30px]">What They Say</h1>
                    <p className="text-[18px] lg:text-[24px] text-[#696984] max-w-[596px] mt-[20px] lg:mt-[30px] pb-[44px]">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                    <button className="text-[16px] lg:text-[24px] border-2 border-orange-500 text-orange-500 bg-transparent hover:bg-orange-600 hover:text-white px-5 lg:px-10 py-2 lg:py-5 rounded-full">See all integrations</button>
                </div>
                <div className="md:w-6/12 gap-6 lg:gap-0 rounded-2xl pb-2 mx-auto">
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="h-full min-h-[828px] mySwiper">
                        <SwiperSlide loading="lazy" className="relative">
                            <img src="./img/img-testimonial.png" className="max-w-[560px]" />
                            <TestimonialCard 
                            title="Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                            name="Gloria Rose"
                            reviews="12 Reviews at Yelp">
                            </TestimonialCard>
                        </SwiperSlide>
                        <SwiperSlide loading="lazy" className="relative">
                            <img src="./img/img-testimonial.png" className="max-w-[560px]" />
                            <TestimonialCard 
                            title="Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                            name="Gloria Rose"
                            reviews="12 Reviews at Yelp">
                            </TestimonialCard>
                        </SwiperSlide>
                        <SwiperSlide loading="lazy" className="relative">
                            <img src="./img/img-testimonial.png" className="max-w-[560px]" />
                            <TestimonialCard 
                            title="Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                            name="Gloria Rose"
                            reviews="12 Reviews at Yelp">
                            </TestimonialCard>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>
    )
}