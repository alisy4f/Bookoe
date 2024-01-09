import Logo from '../assets/Group 3.svg'

const Navbar = () => {
    return (
        <>
            <div className="max-w-[1241px] h-[71.97px] relative object-center my-0 mx-auto">
                <div className="w-[225px] h-[71.97px] left-0 top-0 absolute">
                    <div className="w-[58.97px] h-[58.97px] left-0 top-[13px] absolute">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="w-[156px] h-[71.77px] left-[69px] top-0 absolute">
                        <div className="left-0 top-0 absolute text-stone-900 text-[41px] font-medium font-['Poppins']">Bookoe</div>
                        <div className="left-[2px] top-[50.77px] absolute text-stone-900 text-sm font-light font-['Poppins']">Rekomendasi Bukumu</div>
                    </div>
                </div>
                <div className="w-[402px] h-[50px] left-[688px] top-[21px] absolute">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                </div>
                <div className="left-[1138px] top-[21px] absolute">
                    <button className="btn btn-outline text-violet-500 text-xl font-medium font-['Poppins'] btn-primary text-nowrap">Edit List</button>
                </div>
                <div className="w-[226px] h-[30px] left-[425px] top-[31px] absolute">
                    <div className="left-0 top-0 absolute text-stone-900 text-xl font-semibold font-['Poppins'] underline">All</div>
                    <div className="left-[50px] top-0 absolute text-neutral-500 text-xl font-normal font-['Poppins']">Latest</div>
                    <div className="left-[134px] top-0 absolute text-neutral-500 text-xl font-normal font-['Poppins']">Top Picks</div>
                </div>
            </div>
        </>
    )
}

export default Navbar