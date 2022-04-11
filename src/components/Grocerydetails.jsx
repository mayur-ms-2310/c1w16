import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import CartButton from "./CartButton"
const GroceryDetails = ()=>{
console.log(data)


    return(
        <>
        <h1>Groceries</h1>
        <div className="container" style={{display:"grid", gridTemplateColumns:"repeat(5,20%)"}}>
            {/* map through the data and display the cards */}
        {data.map((item)=>{
            return <><div ><GroceryItem {...item}/>
           <CartButton {...item}/></div></>
        })}
        </div>
        </>
    )
}
export default GroceryDetails