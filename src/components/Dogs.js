import { useState, useEffect } from "react";
import useSWR from "swr";

const API_URL = "https://api.thedogapi.com/v1/images/search";

export default function Dogs(){
    
    const [perros, setPerros] = useState([]);

    useEffect(()=>{
    fetch(API_URL)
    .then(r=>r.json())
    .then(d=>{
        console.log(d)
        setPerros(d)});
    },[]);

    return perros;
}

/**
 * const fetcher = (url) => fetch(url).then((res) => res.json());
 * 
 * const {data} = useSWR(API_URL, fetcher);
 * console.log(data);
 */