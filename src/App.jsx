import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from 'Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/auth/thunks';
import { selectorAppState } from 'redux/appState/selectors';
import PrivateRoute from 'guards/PrivateRoute';
import PublicRoute from 'guards/PublicRoute';
const Home = lazy(() => import('pages/HomePage'));
const Phonebook = lazy(() => import('pages/PhonebookPage'));
const Login = lazy(() => import('pages/Login'));
const Registration = lazy(() => import('pages/Registration'));

const App = () => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectorAppState);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    !isLoading && (
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