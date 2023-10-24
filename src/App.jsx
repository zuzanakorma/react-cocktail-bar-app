import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  About,
  Landing,
  Cocktail,
  HomeLayout,
  Error,
  SinglePageError,
  Booking,
  Menu,
} from './pages';
// import { loader as landingLoader } from './pages/LandingPage';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { loader as menuLoader } from './pages/Menu';

import { action as bookingAction } from './pages/Booking';

// cache search results for 5 min
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        // loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'menu',
        loader: menuLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Menu />,
      },
      {
        path: 'booking',
        element: <Booking />,
        action: bookingAction,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
export default App;
