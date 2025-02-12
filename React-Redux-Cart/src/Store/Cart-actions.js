import { createCartActions } from './CartSlice';
import { createuiActions } from './UISlice';

export const sendCartData = (cart) => {
    return async (dispatch) =>{
        async function updateCart()
  {
    dispatch(createuiActions.showNotification({
      status : 'pending',
      title : 'StoringData',
      message : 'Process is pending'
    }));
    const response = await fetch('https://reactweb-ef5b4-default-rtdb.firebaseio.com/cart.json',{
      method : 'PUT',
      body : JSON.stringify(cart)
    });

    if(!response.ok)
    {
      dispatch(createuiActions.showNotification({
        status : 'failed',
        title : 'StoringData',
        message : 'Failure in storing the cart '
      }));

    }
    dispatch(createuiActions.showNotification({
      status : 'success',
      title : 'StoringData',
      message : 'The cart is successfully stored in database'
    }));

  }
  try
   {
    updateCart(cart);
}
catch(error)
{
    dispatch(createuiActions.showNotification({
        status : 'failed',
        title : 'StoringData',
        message : error.message
      }));
}
    }
}

export const fetchedData = () =>
{
    return async (dispatch) => {
        dispatch(createuiActions.showNotification({
            status : 'pending',
            title : 'fetchingData',
            message : 'Process is pending'
          }));
        async function fetchdata(){
            const response = await fetch('https://reactweb-ef5b4-default-rtdb.firebaseio.com/cart.json');
            const resData = await response.json();
            if(!response.ok)
                {
                  dispatch(createuiActions.showNotification({
                    status : 'failed',
                    title : 'fetchingData',
                    message : 'Failure in fetching the cart '
                  }));
            
                }
                dispatch(createuiActions.showNotification({
                  status : 'success',
                  title : 'fetchingData',
                  message : 'The cart is successfully fetched from database'
                }));
                return resData;

        }
        try
   {
    const data = await fetchdata();
    dispatch(createCartActions.replaceCart(data))
}
catch(error)
{
    dispatch(createuiActions.showNotification({
        status : 'failed',
        title : 'fetchingData',
        message : error.message
      }));
}
    }
}