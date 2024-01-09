import SmallBook from "../component/SmallBook"

const Latest = () => {
    return (
        <>
            <div className="w-[1241px] h-[147px] bg-indigo-50 rounded-[15px] mx-auto mt-[33px] mb-[77px] py-[42px]">
                <p className="ml-[71px]">
                    <span className="text-stone-900 text-[42px] font-semibold font-['Poppins']">Our </span>
                    <span className="text-violet-500 text-[42px] font-semibold font-['Poppins']">Latest</span>
                    <span className="text-stone-900 text-[42px] font-semibold font-['Poppins']"> Collection</span>
                </p>
            </div>

            <SmallBook />
        </>
    )
}
export default Latest