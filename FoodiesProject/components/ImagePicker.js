'use client';

import { useRef, useState } from 'react';
import classes from './ImagePicker.module.css';
import Image from 'next/image';

export default function ImagePicker({label,name})
{
    const [pickedImage,setPickedImage] = useState();
    const input = useRef();

    function handleClick()
    {
        input.current.click();
    }

    function handleChange(event)
    {
       const file =  event.target.files[0];

       if(!file)
       {
        setPickedImage(null);
       }


       const fileReader = new FileReader();

        fileReader.onload = ()=> setPickedImage(fileReader.result);
       fileReader.readAsDataURL(file);

    }

    return(
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet</p>}
                {pickedImage && 
                <Image src = {pickedImage} alt = "This image is picked by user" fill/>}
            </div>
            <input className={classes.input}
            ref = {input}
            type="file"
            accept = 'image/png, image/jpeg'
            name={name}
            id = {name}
            onChange={handleChange}
            required
            />
        
           
        </div>
        <button className = {classes.button} onClick={handleClick}>Pick Image</button>
    </div>
    );
    

}