import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency){
    const [data,setData] = useState(0)

    useEffect(()=>
    {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=> res.json() )
        .then((datas)=> setData(datas.rates))
    }
        ,[currency])
        return data
}