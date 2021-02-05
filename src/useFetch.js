import { useEffect, useState } from "react";

const useFetch = (url)=>{

    const [err,setError] = useState(false);
    const [isPending,setIsPending] = useState(true);
    const [data,setData] = useState(null);
    
    useEffect(()=>{
        const abortCont = new AbortController();
        const signal = abortCont.signal;
        setTimeout(() => {
        fetch(url,{signal})
        .then(res=>{
            if(!res.ok)
            throw new Error("Unable to fetch information");
            return res.json();
        })
        .then((data) =>{
            setIsPending(false);
            setData(data);
        })
        .catch(e=>{
            if(e.name === 'AbortError')
            {
                console.log("Fetch Aborted");
            }
            else{
                setIsPending(false);
                setError(true);
            }    
        })
        
    },1000);
    return ()=>abortCont.abort(); 
    },[url]);
    return {err,isPending,data};
}
export default useFetch;