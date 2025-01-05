import { HfInference } from '@huggingface/inference'


const SYSTEM_PROMPT=`
You are an assistant that receives a list of ingredients that a user 
make with some or all of those ingredients. You don't need to use every ingredient they mention
in your receipe. The receipe can inculde additional ingredients they didn't mention, nbut try not to include too many
extra ingredients.Format your response in markdown to make it easier to render  to a web page.`
const hf= new HfInference(process.env.REACT_APP_API_KEY)

export async function generateReceipe(ingredientsArr){
    const ingredientsStr=ingredientsArr.join(", ")
    try{
        const response=await hf.chatCompletion({
            model:"mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages:[
                {role:"system",content:SYSTEM_PROMPT},
                {role:"user",content:`I have ${ingredientsStr}.Please give me a receipe 
                you would recommend I make`}    
            ],
            max_tokens:1024
        })
        return response.choices[0].message.content
    }
    catch(e){
        console.error(e)
    }
}