import styles from "./Item.module.css"

const Item  = ({foodItem , handleBuyButton , bought} ) => {  //receiving props and behaviour from FoodItems component
      /*const handleBuyButtonClicked = (event) => {
        console.log(event);   //we can see the event object in the console to see more details
        console.log(`${foodItem} being bought`);
      } */
    
        //write props in function arguments then use it as props.fooditems OR destructuring OR we can also write {fooditem} directly in the function argument()
  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}><span className={`${styles["kg-span"]}`}>{foodItem}</span>
    <button className = {`${styles.button} btn btn-info`}
     // onClick={(event) => handleBuyButtonClicked(event)}
      onClick = {handleBuyButton}
    >
      Buy</button>
    </li>
  );
}

export default Item;