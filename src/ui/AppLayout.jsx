import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../ui/Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from '../ui/Loader';

function AppLayout() {
  //GLOBAL NAVGATION laoding indicator
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading'; //LOADAING INDICATOR

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
