import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';
const db = sql('meals.db');

export async function getMeals()
{
    // throw new Error('Failed to fetch the data');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal)
{
    meal.slug = slugify(meal.title,{lower : true});
    meal.instructions = xss(meal.instructions);

    const extenstion = meal.image.name.split(".").pop();

    const filename = `${meal.slug}.${extenstion}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);

    const bufferedArray =   await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedArray),(error)=>{
        if(error){
        throw new Error('Failed to store the image');
        }
    });

    meal.image = `/images/${filename}`;

    db.prepare(`
        INSERT INTO meals (slug,title,image,summary,instructions,creator,creator_email)
        VALUES (
        @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
         )
        `).run(meal);

     


}