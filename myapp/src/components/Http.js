async function fethCoupons()
{
    const response = await fetch('https://localhost:7184/api/Coupon',
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }
    );
    const resData = await response.json();
    if(!response.ok)
    {
        throw new Error('Failed to connect webapi');
    }
    return resData;
}

export default fethCoupons;