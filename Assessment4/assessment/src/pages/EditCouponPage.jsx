import { useLoaderData } from "react-router-dom";
import EntryForm from "../components/EntryForm";

function EditCouponPage()
{
    const coupon = useLoaderData();
    return(
        <EntryForm method = 'PUT' coupon = {coupon}/>
    );
}

export async function loader({request,params})
{
    const id = params.couponId;
   
     const response = await fetch('https://localhost:7184/api/Coupon/'+ id);
     const data = await response.json();
     return data.result; 

}



export default EditCouponPage;

