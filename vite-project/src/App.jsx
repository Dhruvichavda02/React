import Youtube from "./youtube"
import { Self } from "./self"
export default function App(){
// const username = "Dhruvi";
const hasDiscount =true;
  return(
    <>
    
   {/* <h1>Hello {username} !</h1> */}
   {hasDiscount && <p> Discount Available! </p>}
  
    {/* <Youtube/> */}
    <Self/>
    </>
  )
}