import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals()
{
    const meals = await getMeals();
        return <MealsGrid meals = {meals}/>
}

export default function mealspage()
{
    
    return (
       <>
       <header className={classes.header}>
        <h1>Delicious Meals, created <span  className = {classes.highlight}>by you</span></h1>
        <p>choose the recipe and cook it for yourself and your loved ones</p>
        <p className={classes.cta}>
            <Link href = '/meals/share'>Share your Favourite recipe</Link>
        </p>
       </header>
       <main>
        <Suspense fallback = {<p className={classes.loading}>Fetching the meals..... </p>}>
        <Meals/>
        </Suspense>

       </main>
       </>
    );
}