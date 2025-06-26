import React,{useState} from "react";

export default function Counter(){

    const[count,setCounter] = useState(0);
    return(

      
            <div style={{padding : '20px'}}>
                    <h2>Counter:{count}</h2>

                    <button
                        onClick={ () => setCounter(count+1)}
                    > 
                    Increase</button>


                    <button
                    onClick={()=> setCounter(count-1)}
                    // disabled={count<0}
                    >
                    Decrease</button>

                    
                    <button
                        onClick={()=> setCounter(0)}
                    >Reset</button>

                    {count<0 && <p style={{color:'red'}}>Too Low!! </p>}
            </div>
       
    )

}