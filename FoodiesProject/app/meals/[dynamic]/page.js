import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import classes from './page.module.css';
import { notFound } from 'next/navigation';

export default function mealsdetail({params})
{
    const meal = getMeal(params.dynamic);

    if(!meal)
    {
        notFound();
    }
    const mealInstructions = meal.instructions.replace(/\n/g,"<br/>");
    return(
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src = {meal.image} alt = 'food image' fill/>
            </div>
            <div className={classes.headerText}>
                <h2>{meal.title}</h2>
                <p className={classes.creator}>by<a href = {`mailto:${meal.creator_email}`}>NAME</a></p>
                <p className={classes.summary}>SUMMARY</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html : mealInstructions,
            }}></p>
        </main>
        </>
    );
}