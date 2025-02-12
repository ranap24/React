import classes from './mealsloading.module.css';

export default function Mealsloading()
{
    return(
        <p className={classes.loading}>Fetching the meals.....  </p>
    );
}