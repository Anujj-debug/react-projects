import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./App.css";
import { useState } from 'react';

import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {
    let [fooditems , setFoodItems] = useState (["Salad" , "Green Vegetable" , "Roti"]);
 //  let fooditems = [];
 
   /* let textStateArr = useState();
      let textToShow = textStateArr[0];
      let setTextState = textStateArr[1]; 
      Alternative shorter syntax using array destructuring
      let [textToShow , setTextState] = useState();
      console.log(`Current value of textState : ${textToShow}`); */

    const onKeyDown = (event) => {
        if(event.key === "Enter") {
          let newFoodItem = event.target.value;
          let newItems = [...fooditems , newFoodItem];
          setFoodItems(newItems);
          event.target.value = "";
        }
    };

  return (
    <>
    <Container>                                                      {/* OR <React.Fragment></React.Fragment> after importing React class*/}
      <h1 className = "food-heading">Healthy Food</h1>                {/*curly braces are used to write javascript*/}
      <FoodInput handleKeyDown = {onKeyDown}></FoodInput>   
      <ErrorMessage items = {fooditems}></ErrorMessage>   
      <FoodItems items = {fooditems}></FoodItems>
    </Container>                                  
    
    {/*<Container>
      <p>
        This is how props Children is used 
      </p>
    </Container>*/}
    </>
  );
}

export default App;
