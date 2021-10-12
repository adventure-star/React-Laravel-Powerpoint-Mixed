import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LeftSideBar from './layouts/LeftSideBar';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const Home = lazy(() => import('./pages/Home'));
const Board = lazy(() => import('./pages/Board'));
const MyLessons = lazy(() => import('./pages/MyLessons'));
const NewLesson = lazy(() => import('./pages/NewLesson'));
const EditLesson = lazy(() => import('./pages/EditLesson'));
const Library = lazy(() => import('./pages/Library'));
const SetUp = lazy(() => import('./pages/SetUp'));
const GetOut = lazy(() => import('./pages/GetOut'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Manage = lazy(() => import('./pages/Manage'));

const SuspenseLoading = () => {
  return (
    <Fragment>
      <div className="w-full d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
        <div className="d-flex align-items-center flex-column px-4">
          <ClipLoader color={'var(--primary)'} loading={true} />
        </div>
        <div className="text-muted font-size-xl text-center pt-3">
          Please wait while we load the page
        </div>
      </div>
    </Fragment>
  );
};

function App() {
  return (
    <React.Fragment>
      <main className="w-full flex items-center bg-customPrimary" style={{ minHeight: "100vh" }}>
        <Suspense fallback={<SuspenseLoading />}>
        <Switch>
            <PrivateRoute path="/lesson/new" component={NewLesson} />
            <PrivateRoute path="/lesson/edit/:id" component={EditLesson} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/register" component={Register} />
            <LeftSideBar>
              <Switch>
                <Redirect from="/" exact to="/home" />
                <motion.div>
                  <PrivateRoute path="/home" component={Home} />
                  <PrivateRoute path="/board" component={Board} />
                  <PrivateRoute path="/mylessons" component={MyLessons} />
                  <PrivateRoute path="/library" component={Library} />
                  <PrivateRoute path="/setup" component={SetUp} />
                  <PrivateRoute path="/manage" component={Manage} />
                  <PrivateRoute path="/getout" component={GetOut} />
                </motion.div>
              </Switch>
            </LeftSideBar>
          </Switch>
        </Suspense>
      </main>
    </React.Fragment>
  );
}

export default App;
