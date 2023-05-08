import React, { useState } from "react";
import './Recipe.css'
import RangeSlider from "./RangeSlider";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Recipe = ({ recipe }) => {
  
  const [ingredientStates, setIngredientStates] = useState(
    recipe.ingredients.map(() => false)
  );

  const toggleIngredientState = (index) => {
    setIngredientStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const [sliderValue, setSliderValue] = React.useState(1);

  const handleSliderValueChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className="recipe-container">
      <h2>{recipe.name}</h2>
      <img className="recipe-image" src={recipe.image} alt={recipe.name} />
      <div>
        <RangeSlider value={sliderValue} onValueChange={handleSliderValueChange} />
      </div>      
      <h3>Ингредиенты:</h3>
      {recipe.ingredients.map((ingredient, index) => (
        <div className="ingredient" key={ingredient.name}>
          <button
            className="ingredient-button"
            onClick={() => toggleIngredientState(index)}
          >
            {ingredient.name} - {(ingredient.weight * sliderValue).toFixed(0)} {ingredient.measure}
          </button>
          <ul
            className={`ingredient-list ${ingredientStates[index] ? "visible" : ""}`}
          >
            {ingredient.items.map((item) => (
              <li key={item.name}>
                {item.name}: {(item.amount * sliderValue).toFixed(2)} {item.measure}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link to={'/'}>
        <Button variant="primary" className="mt-3">К выбору начинок</Button>
      </Link>
    </div>
  );
};

export default Recipe;