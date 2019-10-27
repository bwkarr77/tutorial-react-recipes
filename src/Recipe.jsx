import React from "react";

const Recipe = ({ props }) => {
  const { label, calories, image, ingredients } = props;
  console.log(props.recipe);
  return (
    <div className="Recipe">
      <h1>Title: {label}</h1>
      <p>calories: {calories}</p>
      <ol>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
