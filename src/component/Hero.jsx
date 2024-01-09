import { useEffect, useState } from "react"
import Arrow from '../assets/Group.svg'
import ENDPOINT from "./Endpoint"

const Hero = () => {

    const [state, setState] = useState([])
    const [hero, setHero] = useState([])


    const fetchData = async () => {
        const url = ENDPOINT + 'api/books'
        const resp = await fetch(url)
        const json = await resp.json();
        setState(json.data)
        setHero(shuffle(json.data))
    }

    console.log(state);
    useEffect(() => {
        fetchData()
    }, [])

    const shuffle = (arr) => {
        const array = [...arr]
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <>
            <div className="w-[1241px] h-auto relative bg-indigo-50 mx-auto mb-[116px] rounded-[15px] mt-[33.03px] py-[66px] flex">
                <div className="w-[525px] ml-[71px]">
                    <p className="text-violet-500 text-xl font-semibold font-['Poppins']">MUST READ</p>
                    <p className="text-stone-900 text-[62px] font-semibold font-['Poppins'] leading-[72px] line-clamp-3">{hero.slice(0, 4)[0]?.title}</p>
                    <div className="text-black text-base font-medium font-['Poppins'] mt-[16px] mb-[30px]">{hero.slice(0, 4)[0]?.author.name}</div>
                    <div className="w-[446px] text-black text-base font-normal font-['Poppins']">
                        {hero.slice(0, 4)[0]?.synopsis}
                    </div>
                    <button className="btn btn-primary text-white text-xl font-medium font-['Poppins'] mt-[16px] mr-[15px]">
                        <p>Read book</p>
                        <img src={Arrow} alt="" />
                    </button>
                    <button className="btn btn-outline btn-primary text-violet-500 text-xl font-medium font-['Poppins']">
                        See All Recomendations
                    </button>


                </div>
                <div className="w-[620.5px] h-[522px] absolute inset-y-0 right-0">
                    <img className="w-[280px] h-[390px] absolute z-20 right-[200.86px] top-[66px] rounded-xl" src={hero.slice(0, 4)[0]?.image_url} alt={hero.slice(0, 4)[0]?.title} />
                    <img className="w-[236.2px] h-[327.75px] absolute z-10 right-[120.3px] top-[97.13px] rounded-xl" src={hero.slice(0, 4)[1]?.image_url} alt={hero.slice(0, 4)[1]?.title} />
                    <img className="w-[196.06px] h-[272.3px] absolute z-0 right-[72.55px] top-[124.59px] rounded-xl" src={hero.slice(0, 4)[2]?.image_url} alt={hero.slice(0, 4)[2]?.title} />
                    {/* {console.log(state.slice(0, 4)[0].image_url)} */}
                    {/* {state.slice(0, 4).map((hero, index) => {
              return <div className="" key={index}>
                <img className="w-[280px] h-[390px]" src={hero.image_url} alt={hero.title} />
                <img className="w-[280px] h-[390px]" src={hero.image_url} alt={hero.title} />
              </div>;
            })} */}
                </div>
            </div>
            
        </>
    )
}

export default Hero