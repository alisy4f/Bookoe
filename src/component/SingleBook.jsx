import { useEffect, useState } from "react"
import ENDPOINT from "./Endpoint"
import { useParams } from "react-router-dom"
import moment from "moment"

const SingleBook = () => {

    const [state, setState] = useState([])
    const { id } = useParams();


    const fetchData = async () => {
        const url = ENDPOINT + `api/books/${id}`
        const resp = await fetch(url)
        const json = await resp.json();
        setState(json)
    }

    console.log(state);
    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div className="grid grid-cols-3 gap-4 justify-between m-12">
      <div className="col-span-1">
        <img
          className="w-full h-[400px] rounded"
          src={state?.image_url}
          alt={state?.title}
        />
      </div>
      <div className="col-span-2 pt-20">
        <p className="text-black text-2xl font-semibold font-['Poppins'] line-clamp-2 pt-3">
          {state?.title}
        </p>
        <p className="text-black text-xl font-['Poppins'] pt-3">
          By {state?.author?.name}
        </p>
        <div className="flex">
          <p className="text-black text-[20px] font-['Poppins'] mr-5  rounded-full bg-amber-400">
            {state?.rating}
          </p>
        </div>

        <p className="text-black text-xl font-['Poppins'] pt-4">
          {state?.synopsis}
        </p>
        <p className="text-neutral-500 text-xl font-light  font-['Poppins'] pt-11">
          {" "}
          First Published {""}
          {moment(state?.created_at).format("MMMM Do YYYY")}
        </p>
      </div>
    </div>
    )
}

export default SingleBook