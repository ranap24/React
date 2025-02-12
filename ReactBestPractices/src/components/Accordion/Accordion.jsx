import { Children, createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";



export const AccordionContext = createContext();

export default function Accordion({className,children})
{
    const [openId,setopenId] = useState();

    function openItem(id)
    {
        setopenId(id)
    }
    function closeItem()
    {
        setopenId(null);
    }

    const ctx = {
        openId,
        openItem,
        closeItem
    }
    return (
        <AccordionContext.Provider value={ctx}>
        <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
