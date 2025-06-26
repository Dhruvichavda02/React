import { useState,useEffect } from "react";


export default function useCurrencyInfo(currency){

    const [data,setData] = useState(0)
    useEffect(()=>{
        fetch('https://open.er-api.com/v6/latest/${currency}')
        .then((res)=>res.json()) // as it returns string so we'll convert it into json
        .then((res)=>setData(res.rates)) //accessing key with []
        console.log(data);        
    },[currency])
    console.log(data);
    return data;
    
}