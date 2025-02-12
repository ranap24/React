export async function modifyCoupon(method,newCoupon)
{
  try{ 
     const response = await fetch('https://localhost:7184/api/Coupon',{
        method : method,
        body : JSON.stringify(newCoupon),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    if(!response.ok)
    {
        throw new Error( 'something went wrong during the posting of the coupon');
    }
    return response;
}
catch(err)
{
    throw new Error(err.message)
}
}

export async function DeleteCoupon(id)
{
    const response = await fetch('https://localhost:7184/api/Coupon/'+ id,{
        method : 'DELETE',
     })
    
     if(!response.ok)
     {
        throw new Error( "Something went wrong with deleting coupon");
     }

     return response;
}
