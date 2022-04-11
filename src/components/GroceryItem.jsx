// reusable card component
const GroceryItem = (props) => {
  console.log(props)
  return <>
  <div>
    <p style={{background:"red" ,height:"30px" , width:"30px" ,borderRadius:"50%"}}>{props.discount}</p>
    <img src={props.imgURL}/>
    <h3>{props.title}</h3>
    <div style={{display:"flex", gap:"5px"}}>
    <p>{props.sellingPrice}</p>
    <p style={{textDecoration : "line-through"}}>MRP : {props.mrp}</p>
    </div>
  </div>
  </>;
};
export default GroceryItem;
