import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decrementItemQuantity } from './cartSlice';
import { incrementItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decrementItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(incrementItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuantity;
