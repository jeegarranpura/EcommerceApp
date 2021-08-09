import React from 'react';
import PageSpinner from './components/PageSpinner';
import {Router, Route, Redirect, Switch } from 'react-router-dom';
import pathConts from './constants/pathConts';
import Login from  './features/AuthForm/LoginContainer';
import { isUserAuthenticated } from './utils/auth-utils';
import { history } from  './utils/navigation-utils';
import MainLayout from  './layout/MainLayout';
import Logincomponent from './components/AuthForm/Login';
import './styles/reduction.scss';



const Register = React.lazy(() => import('./features/AuthForm/RegisterContainer'));
const Dashboard = React.lazy(() => import('./features/Dashboard/DashboardContainer'));



const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if(isUserAuthenticated){
          return <Component {...props} />;

        }else{
           <Redirect to={pathConts.LOGIN} Component={Logincomponent} {...props}/>

        }
          // window.location.href = pathConts.DASHBOARD;
      }}
    />
  );
};
function App(props) {
  return (
    <Router basename={() => getBasename()} history={history} >
      <Switch>
        <Route
          path={pathConts.LOGIN}
          Component={Logincomponent}
          render={(props) => {
            if(isUserAuthenticated){
              return <Redirect to="/" />;
            }else {
              return <Login {...props} />
            }
              // return <Redirect to="/login" />;
          }}
        />

        <MainLayout>
          <React.Suspense fallback={<PageSpinner />} > 
             <Switch>
              <PrivateRoute exact path={pathConts.DASHBOARD} component={Dashboard} />
              <PrivateRoute exact path={pathConts.REGISTER} component={Register} />
            </Switch>
           </React.Suspense> 
        </MainLayout>
      </Switch>
    </Router>

  );
};


export default App;
