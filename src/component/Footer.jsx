import Logo from '../assets/Group 3.svg'

const Footer = () => {

    return (
        <>
            <div className="w-[1241px] h-[303px] bg-violet-500 mx-auto rounded-[15px] pt-[44px] pb-[61px] mb-[54px]">
                <p className="w-[794px] text-center mx-auto text-white text-[42px] font-semibold font-['Poppins'] mb-[22px]">
                    Join our newsletter to get our latest recommendation!
                </p>
                <div className="mx-auto w-[452px] flex justify-between">
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-[345px] text-base font-light font-['Poppins']" />
                    <button className="btn btn-outline ml-[8px] text-violet-500 text-xl font-medium font-['Poppins'] btn-primary text-nowrap bg-white">Submit</button>
                </div>
            </div>
            <div className='relative w-[1241px] mx-auto flex justify-between'>
                <div className="w-[225px] h-[71.97px] relative">
                    <div className="w-[58.97px] h-[58.97px] left-0 top-[13px] absolute">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="w-[156px] h-[71.77px] left-[69px] top-0 absolute">
                        <div className="left-0 top-0 absolute text-stone-900 text-[41px] font-medium font-['Poppins']">Bookoe</div>
                        <div className="left-[2px] top-[50.77px] absolute text-stone-900 text-sm font-light font-['Poppins']">Rekomendasi Bukumu</div>
                    </div>
                </div>
                <p className="w-[526.27px] text-slate-500 text-lg font-normal font-['DM Sans'] leading-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                </div>
                <div className='flex justify-evenly h-[87px] pt-[43px] border-t-2 mt-[55px]'>
                    <div className="text-slate-500 text-lg font-normal font-['DM Sans'] leading-tight">Copyright © 2023 Codemasters.id | All Rights Reserved </div>
                    <div className="w-[177px] h-[19px] justify-start items-center gap-[22px] inline-flex">
                        <div className="w-[11px] h-[19px] relative" />
                        <div className="w-[19px] h-[15px] relative" />
                        <div className="w-[19px] h-[19px] relative">
                            <img className="w-[18px] h-[18px] left-[0.85px] top-[0.40px] absolute" src="https://via.placeholder.com/18x18" />
                        </div>
                        <div className="w-[19px] h-[18px] relative">
                            <div className="w-[18px] h-[17.14px] left-[0.85px] top-[0.82px] absolute">
                            </div>
                        </div>
                        <div className="w-[21px] h-[15px] relative">
                            <div className="w-[19.80px] h-3.5 left-[0.95px] top-[0.40px] absolute">
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Footer