import { useEffect, useState } from "react"


const useMediaQuery=(query )=>{
    const [match, setMatch]=useState(false)
    useEffect(()=>{
        const media=window.matchMedia(query)
        if(media.matches!==match){
            setMatch(media.matches)
        }
        const listener=()=>setMatch(media.matches)
        window.addEventListener("resize",listener)
        return ()=>window.removeEventListener("resize",listener)
    },[match, query])
    return match
}

export default useMediaQuery