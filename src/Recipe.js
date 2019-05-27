import React from "react";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="row">
    <div className="col s8 offset-s2 ">
      <div className="card">
        <div className="card-image">
          <img src={image} alt="recipe" />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
             
          <h3> Ingredients </h3>
              <ol className="card-content" >
                {ingredients.map(ingredient => (
                  <li class="collection-item" > {ingredient.text}</li>
                ))}
              </ol> 
        </div>
        <div className="card-action">
          <strong>Calories</strong>   {calories}
        </div>
      </div>
    </div>
  </div>
  );
};
export default Recipe;
