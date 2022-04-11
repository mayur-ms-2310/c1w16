import { useState } from "react";

// keep the add to cart component here
const CartButton = (props) => {
    //manage state of the count 
    let [count,setCount] = useState(0)

    let handleinc = ()=>{
      setCount(count+1)
    }
    let handledec = ()=>{
      setCount(count-1)
    }
   let handlecart = ()=>{
      setCount(count=1)
    }

  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  {count==0? <button style={{background:"skyblue"}} onClick={handlecart}>Add to Cart</button>:
  <div style={{display:"flex" ,justifyContent:"center",alignItems:"center", gap:"5px"}}>
      <button style={{background:"skyblue"}} onClick={handledec}>-</button>
      <p className="count-item">{count}</p>
      <button style={{background:"skyblue"}} onClick={handleinc}>+</button>
  </div>}

  </>;
};
export default CartButton
