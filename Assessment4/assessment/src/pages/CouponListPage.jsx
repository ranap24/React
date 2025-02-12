import { useEffect,useState } from "react";
import ListTable from "../components/ListTable";
import {Link} from 'react-router-dom';




const columns = [
    {
        name : 'ID',
        selector : row => row.couponId,
        sortable : true
    },
    {
        name : 'CouponCode',
        selector : row => row.couponCode,
        sortable : true
    },
    {
        name : 'DiscountAmount',
        selector : row => row.discountAmount,
        sortable : true

    },
    {
        name : 'MinimumAmount',
        selector : row => row.minimumAmount,
        sortable : true
    },
    {
        name : 'edit',
        selector : row => row.edit,
    },
    {
        name : 'delete',
        selector : row => row.delete
    }

];


function CouponListPage()
{
    const[couponList,setCouponList] = useState([]);
    const[searchElement,setSearchElement] = useState('');
    console.log('CouponListPage executing');

    useEffect(()=>{
        const FetchCoupons = async() => {
            const response = await fetch('https://localhost:7184/api/Coupon');
            const data = await response.json();
            const result = AddEditDelete(data.result);
            setCouponList(result);
        }
        FetchCoupons();
         
    },[])

    function AddEditDelete(couponList)
    {
        const result = couponList.map((coupon) => {
            return {
                ...coupon,
                edit : <Link to = {`/${coupon.couponId}`}>Edit</Link>,
                delete :  <Link to = {`/${coupon.couponId}/delete`}>Delete</Link>
            }
        })
        return result;
    }
    
    function handleChange(event)
    {
        setSearchElement(event.target.value);    
    }
    const searchList = couponList.filter((coupon)=>{return (Object.values(coupon).some(value => String(value).includes(searchElement)))})
    console.log(searchList)
    return (
        <>
        <input onChange={handleChange} value = {searchElement}/>
        <Link to='/AddCoupon'>+ AddCoupon</Link>
        <ListTable columns={columns} data={searchList} />

        </>
    );
}

export default CouponListPage;