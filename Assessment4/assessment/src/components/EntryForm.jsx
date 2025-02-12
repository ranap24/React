import {  useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import { modifyCoupon } from "../api";
import { IsEmpty } from "./Validation";
import { useState } from "react";
import classes from './EntryForm.module.css';


let errors = {
    couponCode : false,
    discountAmount : false,
    minimumAmount : false
};

function EntryForm({method,coupon})
{
    const [errorsvalid,setErrors] = useState(errors);
    const navigate = useNavigate();
   

    async function handleSubmit(event)
    {
        event.preventDefault();

        const fd = new FormData(event.target);
        const newCoupon = Object.fromEntries(fd.entries());
        if(IsEmpty(newCoupon.couponCode)||IsEmpty(newCoupon.discountAmount)||IsEmpty(newCoupon.minimumAmount))
        {
            setErrors((prevState) => {return{
                ...prevState,
                couponCode : IsEmpty(newCoupon.couponCode),
                discountAmount : IsEmpty(newCoupon.discountAmount),
                minimumAmount : IsEmpty(newCoupon.minimumAmount)
            }
         })
            return null;
        }
        await modifyCoupon(method,newCoupon);
        navigate('/CouponList'); 
    }
    return(
        <div>
            <form method = {method} onSubmit={handleSubmit} className={classes.form}>
                {method === 'PUT' &&
                    <div>
                        <label>CouponId</label>
                        <input type = 'text' id = 'couponId' name = 'couponId' defaultValue = {coupon ? coupon.couponId : ''} readOnly/>
        
                    </div>
                }
                <div>
                    <label>CouponCode</label>
                    <input type="text" id = 'couponCode' name = 'couponCode' required defaultValue={coupon ? coupon.couponCode : ''} />
                    {errorsvalid.couponCode && <p >CouponCode is required</p>}
                </div>
                <div>
                    <label htmlFor="discountAmount">DiscountAmout</label>
                    <input type="text" id="discountAmount" name = 'discountAmount' required defaultValue={coupon ? coupon.discountAmount : ''}/>
                    {errorsvalid.discountAmount && <p>discountAmount is required</p>}

                </div>
                <div>
                    <label htmlFor="minimumAmount">MinimumAmout</label>
                    <input type="text" id = 'minimumAmount' name = 'minimumAmount' required defaultValue={coupon ? coupon.minimumAmount : ''} />
                    {errorsvalid.minimumAmount && <p>minimumAmount is required</p>}
                </div>
                <div>
                    <button >{method === 'POST' ? 'Create' : 'Update'}</button>
                    <Link to = '/CouponList'>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default EntryForm;