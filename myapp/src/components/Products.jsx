import fetchCoupons from "./Http";

export default function Product()
{
    const handleData = async () =>{
        const data =  await fetchCoupons();
        console.log(data);
    }
    return(
        <div>
            <button type='button' onClick={handleData}>click for data</button>
        </div>
    );

}