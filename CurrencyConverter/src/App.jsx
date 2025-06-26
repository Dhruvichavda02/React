import { useState } from "react";
import { InputBox } from "./Components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

export default function App(){
  const [Amount,setAmount] = useState(0)
  const [from,setFrom] = useState('USD')
  const [to,setTo] = useState('INR')
  const [convertAmount,setConvertAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
//   console.log("currencyInfo:", currencyInfo);
// console.log("to:", to);
  const currencyOptions = Object.keys(currencyInfo || {})
  

  const convert = ()=>{
    setConvertAmount(Amount*currencyInfo[to])
  }
  return(
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>\
 
      <h2>Currency Converter</h2>
      <InputBox label="From"
            amount={Amount}
            currency={from}
            currencyOptions={currencyOptions}
            onCurrencyChange={setFrom}
           
            onAmmountChange={(amount)=>setAmount(amount)}
      />
        <InputBox label="To"
            amount={convertAmount}
            currency={to}
            currencyOptions={currencyOptions}
            onCurrencyChange={setTo}
           
            onAmmountChange={(amount)=>setAmount(amount)}
      />
      <button onClick={convert} style={{ marginTop: "1rem" }}>Convert</button>
     
    </div>
  )
}

