import React, { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorComponent from "./pages/ErrorComponent";

// Lazy Loading / Dynamically Import Our Component
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Menu = lazy(() => import('./pages/Menu'));
const Cart = lazy(() => import('./pages/Cart'));
const Orders = lazy(() => import('./pages/Orders'));
const MyProfile = lazy(()=> import('./pages/MyProfile'));
const Restaurant = lazy(()=> import('./pages/Restaurant'));
const Restaurants = lazy(()=>import('./pages/Restaurants'));

const LazyLoadingComponent = ({ component: LazyComponent }) => {
  return (
    <Suspense fallback={<LoadingSpinner />} >
      <LazyComponent />
    </Suspense> 
  );
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LazyLoadingComponent component={Home} />
      }, {
        path: "/login",
        element: <LazyLoadingComponent component={Login} />
      }, {
        path: "/register",
        element: <LazyLoadingComponent component={Register} />
      },{
        path: "/menu",
        element: <LazyLoadingComponent component={Menu} />
      },{
        path: "/cart",
        element: <LazyLoadingComponent component={Cart} />
      }, {
          path: "/orders",
          element: <LazyLoadingComponent component={Orders} />
      },{
        path: "/myprofile",
        element: <LazyLoadingComponent component={MyProfile} />
      },{
        path:"/restaurant/:id",
        element:<LazyLoadingComponent component={Restaurant} />
      },{
        path:"/restaurants",
        element:<LazyLoadingComponent component={Restaurants} />
      },
    ],
    errorElement: <ErrorComponent />
  }
]);
