import { useEffect } from "react"
import { useState } from "react"
import { fetchMovie } from "../api/api"
import { StyleList } from "../components/MovieItem/styles"


export const Trailers=({id, title})=>{
const[trailer, setTrailer] =useState(null)
useEffect(()=>{
    fetchMovie(id).then((res) => setTrailer(res));

},[id])
const src=trailer && trailer.results.find((item) => item.name === "Official Trailer")

    return(
       <> {src?<StyleList>

           <iframe
            width="420"
            height="345"
            allow="fullscreen"
            src={`https://www.youtube.com/embed/${src.key}`}
            title={title}
       />
          </StyleList>:null}</>
    )
}