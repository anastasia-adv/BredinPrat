import React from 'react';
import { Admin, Resource, ShowGuesser, EditGuesser, Login, Notification, Layout } from 'react-admin';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import DealListDemo from './deals/ListdealsDemo';
import { DealShowDemo } from './deals/ShowdealDemo';
import { UserList } from './users/Listusers';
import { UserCreate } from './users/UserCreate';
import { UserShow } from './users/UserShow';
import DealList from './deals/Listdeals';
import { DealShow } from './deals/Showdeal';
import authProvider from './admin/authProvider';
import MyLoginPage from './admin/Login';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/People';
import Home from './Home';
import IdleTimer from 'react-idle-timer';

//const MyLoginPage = () => <Login backgroundImage="../IMG_3581_testBD.jpg" />;

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#3f51b5",
    },
  },
});

const dataProvider = jsonServerProvider(' http://localhost:5000');
const MyNotification = props => <Notification {...props}autoHideDuration={0} />;
const MyLayout = (props) => <Layout {...props} notification={MyNotification} />;


const App = () => (
  <React.Fragment>
    <Admin theme={theme} layout={MyLayout} loginPage={MyLoginPage} dashboard={Home} dataProvider={dataProvider} authProvider={authProvider}>
      {permissions => [
        <Resource name="deals" options={{ label: 'Deals (Test)' }} list={DealListDemo} show={DealShowDemo} />,
        <Resource name="tenderoffers" options={{ label: 'Tender Offers' }} list={DealList} show={DealShow} />,
        <Resource name="activities" />,
        permissions === 'admin'
          ? <Resource name="users" list={UserList} icon={UserIcon} create={UserCreate} show={UserShow} />
          : null,
      ]}
    </Admin>
    {/*<div style={{
      position: 'fixed', right: 0, bottom: 0, left: 0, zIndex: 100,
      padding: 6,
    }}>Made with <span className="heart">&#9829;</span> by Addventa</div>*/}
  </React.Fragment>
);

export default App;