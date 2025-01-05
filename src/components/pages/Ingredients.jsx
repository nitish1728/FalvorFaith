import '../css/Ingredients.css'
import React from 'react'
export default function Ingredients(props){
    const menu=props.addIngredients.map(ingredient=>{
        return(
        <li key={ingredient}>{ingredient}</li> 
        )
    })

    return(
        <div className="mainingredient">
            <div className="ingredients_list">
                <div className="ingredients">
                    {menu.length>0 && <h2>Ingredients on Hand:</h2>}
                    <ul className="list">{menu}</ul>
                </div>
            </div>

            {menu.length>2 && <div className="ready_receipe">
                {!props.getReceipe && <div className="ready_description">
                    <h3>Ready for a receipe? </h3>
                    <p>Generate a receipe from your list of ingredients</p>
                </div>}
                {!props.getReceipe?<button onClick={props.togglegetReceipe}>Get receipe</button>:<h2>Flavor Faith Recommends:</h2>}
            </div>}
        </div>
    )
}