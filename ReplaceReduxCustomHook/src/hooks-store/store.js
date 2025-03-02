import { useEffect, useState } from "react";



let globalState = {};
let listeners = [];
let actions = {};

export default function useStore()
{
    const setState = useState(globalState);

    const dispatch = (actionIdentifier,payload) => {
        const newState = actions[actionIdentifier](globalState,payload);
        globalState = {...globalState,...newState};

        for(const listener of listeners)
        {
            listener(globalState);
        }
        useEffect(()=>
        {
            listeners.push(setState)

            return ()=>{
                listeners = listeners.filter(li => li !== setState);
            }
        },[setState]);

        return [globalState,dispatch];
    }
}

export const initStore = (userActions,initialState)=>{
    if(initialState)
    {
        globalState = {...globalState,...initialState};
    }
    actions = {...actions,...userActions};

}