import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { createuiActions } from '../../Store/UISlice.js';

const CartButton = (props) => {
  const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
  const dispatch = useDispatch();

  function handleCart()
  {
   dispatch(createuiActions.showCart());
  }
  return (
    <button className={classes.button} onClick={handleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
