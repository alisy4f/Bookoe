import { useEffect, useState } from "react"
import ENDPOINT from "./Endpoint"
import { Link } from "react-router-dom"

const SmallBook = () => {

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
            <div className="flex justify-between w-[1241px] mx-auto">
                {state.slice(3, 7).map((book, index) => (
                    <div className="w-[263px] h-[551px] mb-[107px] relative" key={index}>
                        <div className="">
                            <div className="w-[260px] h-[340px] ">
                                <img className=" w-full h-full rounded-lg" src={book.image_url} alt={book.title} />
                            </div>
                            <div className="relative w-[265px]">
                                <p className="text-xl font-bold line-clamp-2">{book.title}</p>
                                <p className="text-lg font-medium">by {book.author.name}</p>
                                <p className="">rating {book.rating}</p>
                            </div>
                            <Link key={book.id} to={`/books/${book.id}`}>
                            <button className="absolute bottom-0 w-[263px] btn btn-outline btn-primary text-violet-500 text-xl font-medium font-['Poppins']">
                                Read Book
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SmallBook