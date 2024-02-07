import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx'
import store from './store';
import Home from './pages/Home.jsx';
import TShirt from './pages/designs/TShirt.jsx';

import './index.css'
import './assets/style.css'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<TShirt />} />
      <Route index={true} path='/design/t-shirt' element={<TShirt />} />
      {/* <Route path='' element={<PrivateRoute />}>
        <Route index={true} path='/' element={<Dashboard />} />
        <Route path='/participants' element={<Participant />} />
        <Route path='/user/:userId' element={<UserDetails />} />
        <Route path='/update-profile' element={<Profile />} />
      </Route>
      <Route path='' element={<GuestRoute />}>
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/verify-code/:id' element={<VerifyCode />} />
        <Route path='/reset-password/:id' element={<ResetPassword />} />
      </Route> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
