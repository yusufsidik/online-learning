export default function TestimonialCard(props){
    const { title, name, reviews } = props;
    return(
        <div className="absolute bottom-0 left-[69px]">
            <div className="w-[680px] h-[329px] relative">
                <div className="w-[680px] h-[329px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
                <div className="w-3.5 h-[329px] left-0 top-0 absolute bg-red-400 rounded-tl-[20px] rounded-bl-[20px] shadow" />
                <div className="w-[139.01px] h-[0px] left-[55px] top-[181.01px] absolute origin-top-left -rotate-90 border border-slate-300"></div>
                <div className="w-[534px] left-[87px] top-[34px] absolute text-gray-500 text-[22px] font-normal font-['Nunito Sans'] leading-10 tracking-wide">
                    <blockquote>{title}</blockquote>
                </div>
                <div className="left-[87px] top-[237px] absolute text-gray-500 text-2xl font-semibold font-['Nunito Sans'] leading-[43.20px]">
                    {name}
                </div>
                <div className="left-[481px] top-[261px] absolute text-slate-500 text-lg font-semibold font-['Nunito Sans'] leading-loose tracking-tight">{reviews}</div>
                <div className="w-[137px] h-6 left-[501px] top-[225px] absolute"></div>
            </div>
        </div>
    )
}