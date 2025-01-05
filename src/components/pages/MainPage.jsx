import '../css/MainPage.css'
import Ingredients from './Ingredients'
import Receipe from './Receipes'
import React from 'react'
import {generateReceipe} from '../javascript/main'

export default function MainPage(){

    const [addIngredients,setaddIngredients]= React.useState([])
    const [getReceipe,setgetReceipe]=React.useState("")
    function toggleVisiblity(text){
        const visibleIngredient=document.querySelector(".alert")
        if (visibleIngredient.style.display==="none" || visibleIngredient.style.display===""){
            visibleIngredient.innerText=text ;
            visibleIngredient.style.display="block"
            visibleIngredient.style.opacity="1"
            setTimeout(()=>{visibleIngredient.style.display="none"},3000)
        }


    }
    function form(FormData){
        const newIngredient=FormData.get("ingredient")
        if (newIngredient.trim()==="")
            toggleVisiblity("Warning! Please enter an ingredient")
        else if (addIngredients.includes(newIngredient.toLowerCase().trim()))
            toggleVisiblity("Warning! You already added this ingredient")
        else
        setaddIngredients(addIngredients=>{
            return([...addIngredients, newIngredient.toLowerCase().trim()])
        })
    }

    async function togglegetReceipe(){
        const receipeMarkdown= await generateReceipe(addIngredients)
        setgetReceipe(receipeMarkdown)
    }
    return(
        <>  
            <div className="mainPage">
                <div className="alert warning"> 
                    <strong>Warning!</strong> Please enter an ingredient
                </div>
                <form className="add_items" action={form}>
                    <input type="text" placeholder='e.g..Oregano' aria-label='Add Ingredient' name="ingredient"/>
                    <button ><span>+</span><p>Add ingredient</p></button>
                </form>
                {addIngredients.length>0 && <Ingredients getReceipe={getReceipe} addIngredients={addIngredients} togglegetReceipe={togglegetReceipe}/>}
                {getReceipe && <Receipe getReceipe={getReceipe} />}
            </div> 
        </>
    )
}