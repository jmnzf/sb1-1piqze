import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Suspense, lazy } from 'react';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';

const Home = lazy(() => import('../pages/Home').then(module => ({ default: module.Home })));
const Catalog = lazy(() => import('../pages/Catalog').then(module => ({ default: module.Catalog })));
const ProductDetail = lazy(() => import('../pages/ProductDetail').then(module => ({ default: module.ProductDetail })));
const Business = lazy(() => import('../pages/Business').then(module => ({ default: module.Business })));
const BusinessProducts = lazy(() => import('../pages/Business/Products').then(module => ({ default: module.BusinessProducts })));
const BusinessOrders = lazy(() => import('../pages/Business/Orders').then(module => ({ default: module.BusinessOrders })));
const BusinessAnalytics = lazy(() => import('../pages/Business/Analytics').then(module => ({ default: module.BusinessAnalytics })));
const BusinessSettings = lazy(() => import('../pages/Business/Settings').then(module => ({ default: module.BusinessSettings })));
const Cart = lazy(() => import('../pages/Cart').then(module => ({ default: module.Cart })));
const Login = lazy(() => import('../pages/Auth/Login').then(module => ({ default: module.Login })));
const Register = lazy(() => import('../pages/Auth/Register').then(module => ({ default: module.Register })));
const Terms = lazy(() => import('../pages/Legal/Terms').then(module => ({ default: module.Terms })));
const Contact = lazy(() => import('../pages/Contact').then(module => ({ default: module.Contact })));
const FAQs = lazy(() => import('../pages/FAQs').then(module => ({ default: module.FAQs })));
const Admin = lazy(() => import('../pages/Admin/Admin').then(module => ({ default: module.Admin })));
const CheckoutWizard = lazy(() => import('../components/checkout/CheckoutWizard').then(module => ({ default: module.CheckoutWizard })));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'catalogo',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Catalog />
          </Suspense>
        ),
      },
      {
        path: 'producto/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: 'mi-negocio',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <Business />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'mi-negocio/productos',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <BusinessProducts />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'mi-negocio/pedidos',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <BusinessOrders />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'mi-negocio/analisis',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <BusinessAnalytics />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'mi-negocio/configuracion',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <BusinessSettings />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'carrito',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: 'checkout',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CheckoutWizard />
          </Suspense>
        ),
      },
      {
        path: 'admin',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute requiredRole="admin">
              <Admin />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: 'registro',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: 'terminos',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Terms />
          </Suspense>
        ),
      },
      {
        path: 'contacto',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'faqs',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <FAQs />
          </Suspense>
        ),
      },
    ],
  },
]);