'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";


function isInValid(text)
{
    return !text || text.trim() === '';

}

export default async function shareMeal(prevstate,formdata)
{
        const meal = {
            title : formdata.get('title'),
            summary : formdata.get('summary'),
            instructions : formdata.get('instructions'),
            image : formdata.get('image'),
            creator : formdata.get('name'),
            creator_email : formdata.get('email')
        }; 
        
        if(isInValid(meal.title)||isInValid(meal.summary)||isInValid(meal.instructions)||isInValid(meal.creator)||isInValid(meal.creator_email)||
         !meal.creator_email.includes('@') || !meal.image)
         {
            return {message : 'Invalid Input'};
         }

        await saveMeal(meal);

        revalidatePath('/meals');

         redirect('/meals');
    
}