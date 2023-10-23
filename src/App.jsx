import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from 'Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/auth/thunks';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
import { isRefreshingSelector } from 'redux/auth/selectors';
const Home = lazy(() => import('pages/HomePage'));
const Phonebook = lazy(() => import('pages/PhonebookPage'));
const Login = lazy(() => import('pages/Login'));
const Registration = lazy(() => import('pages/Registration'));

const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(isRefreshingSelector);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="phonebook"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    )
  );
};

export default App;