import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';


const CartButton = (props) => {

  const noOfItems = useSelector(state => state.cart.items.length);

  const dispatch = useDispatch();

  const cartHandler = () => {

    dispatch(uiActions.toggle());

  }


  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
