import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ props }) => {
  const { label, calories, image, ingredients } = props;
  console.log(props.recipe);
  return (
    <div className="{style.recipe}">
      <h1 className="title">Title: {label}</h1>
      <p>calories: {calories}</p>
      <img src={image} alt="" />
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
