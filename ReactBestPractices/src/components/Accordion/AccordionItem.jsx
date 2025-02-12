import { useContext } from "react";
import { AccordionContext } from "./Accordion";

export default function AccordionItem({id,title,content})
{

    const {openId,openItem,closeItem} = useContext(AccordionContext);

    const isOpen = openId === id;

    function handleClick()
    {
        if(isOpen)
        {
            closeItem();
        }
        else{
            openItem(id);
        }
    }

    return(
        <li className="accordion-item">
        <h1 onClick = {handleClick} className="accordion-item-tiltle">{title}</h1>
        <p className={!isOpen ? 'accordion-item-content': undefined} >{content}</p>
        </li>
    );
}