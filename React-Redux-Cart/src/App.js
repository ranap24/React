import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/Notification';
import { fetchedData, sendCartData } from './Store/Cart-actions';

let initial = true;

function App() {
  const showCart = useSelector((state)=>state.ui.showCart);
  const cart = useSelector((state)=>state.cart);

  const notification = useSelector((state)=>state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchedData())},[dispatch]);
  useEffect(()=>{
     if(initial)
     {
      initial = false;
      return
     }
     if(cart.stateChanged)
     {
     dispatch(sendCartData(cart));
     }
  },[cart,dispatch]);

  return (
    <Fragment>
      {(notification && !initial) ?  <Notification title = {notification.title} status = {notification.status} message = {notification.message}/>: undefined}
    <Layout>
     {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}



export default App;
