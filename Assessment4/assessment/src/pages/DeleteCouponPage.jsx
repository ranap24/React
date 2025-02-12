import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { DeleteCoupon } from "../api";

function DeleteCouponPage()
{
    const navigate = useNavigate();
    const id = useParams().couponId;
   if(window.confirm("Are you sure you want to delete this coupon"))
   {
    const deleteCoupon = async() => {
        const response = await DeleteCoupon(id)
        if(!response.ok)
        {
            throw new Error({message :'Something Went wrong during the deleting of coupon '},{status : 500})
        }
        navigate('/CouponList');   
    }
    deleteCoupon();
    
    
   }
   else {
     navigate('/CouponList');
   }
}

export default DeleteCouponPage;