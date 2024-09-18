import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"


function Search() {
  const {FetchData,setinput,input}=useContext(ImageContext)  

  return (
    <>
    <div className="flex justify-center">
       <div className="flex mt-5 gap-2 " >
        <input onChange={(e)=>setinput(e.target.value)} value={input} className="w-[300px]  rounded-md border-none" type="text" placeholder="Search image Term" />
        <button onClick={FetchData} className="px-2 py-2 bg-green-700    rounded-md">Search</button>
       </div>
    </div>
    </>
  )
}

export default Search
