import { useState,useEffect } from "react";



export default function useFetch(fetchFn,InitialValue)
{
    const [fetchedData, setfetchedData] = useState(InitialValue);
  
  const [isloading,setisloading] = useState(false);
  const [error,seterror] = useState();
    useEffect(()=>
        {
          async function fetchData()
          {
            setisloading(true);
            try
            {
              const fetchedData = await fetchFn();
              setfetchedData(fetchedData);
            }
          catch(error)
          {
            seterror({message : error.message || "Failed to fetch user places."});
          }
          setisloading(false);
          }
      
          fetchData();
        },[fetchFn]);

        return {
            isloading,
            error,
            fetchedData,
            setfetchedData
        }
}