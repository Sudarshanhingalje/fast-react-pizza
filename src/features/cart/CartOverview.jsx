import { Link } from 'react-router-dom';
import { getTotalCartItems, getTotalCartPrice } from './cartSlice';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const getotalQuantity = useSelector(getTotalCartItems);
  const getTotalPrice = useSelector(getTotalCartPrice);

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>🛒 {getotalQuantity} pizzas</span>
        <span>{formatCurrency(getTotalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
