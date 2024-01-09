import { useEffect, useState } from "react"
import ENDPOINT from "./Endpoint"
import { Link } from "react-router-dom"

const BigBook = () => {

    const [state, setState] = useState([])


    const fetchData = async () => {
        const url = ENDPOINT + 'api/books'
        const resp = await fetch(url)
        const json = await resp.json();
        setState(json.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="flex w-[1241px] mx-auto justify-between flex-wrap">
                {state.slice(3, 7).map((book, index) => (
                    <div className="w-[564px] h-[346px] mb-[92px]" key={index}>
                        <div className="grid grid-cols-2">
                            <div className="w-[277px] h-[346px] ">
                                <img className="w-full h-full rounded-lg" src={book.image_url} alt={book.title} />
                            </div>
                            <div className="ml-[17px] relative">
                                <p className="text-xl font-bold line-clamp-3">{book.title}</p>
                                <p className="text-lg font-medium">by {book.author.name}</p>
                                <div className="w-[41px] h-[41px] bg-amber-400 rounded-full mt-[20px] mb-[31px] relative pt-[10px]">
                                    <p className=" text-center text-white text-base font-normal font-['Poppins']">{book.rating}</p>
                                </div>
                                <p className="line-clamp-3 max-w-[270px]">{book.synopsis}</p>
                                <Link key={book.id} to={`/books/${book.id}`}>
                                    <button className="absolute bottom-0 w-[270px] btn btn-outline btn-primary text-violet-500 hover:text-white text-xl font-medium font-['Poppins']">
                                        Read Book
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BigBook