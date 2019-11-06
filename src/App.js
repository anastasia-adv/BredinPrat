import React from 'react';
import { Admin, Resource, ShowGuesser, EditGuesser } from 'react-admin';
import DealListDemo from './deals/ListdealsDemo';
import { DealShowDemo } from './deals/ShowdealDemo';
import { UserList } from './users/Listusers';
import DealList from './deals/Listdeals';
import { DealShow } from './deals/Showdeal';
import MyLayout from './layout/MyLayout';
import authProvider from './admin/authProvider';
import MyLoginPage from './admin/Login';
import jsonServerProvider from 'ra-data-json-server';
import Home from './Home';

const dataProvider = jsonServerProvider(' http://localhost:5000');

const App = () => (
    <Admin loginPage={MyLoginPage} dashboard={Home} dataProvider={dataProvider} authProvider={authProvider}>
      {permissions => [
        <Resource name="deals" list={DealListDemo} show={DealShowDemo} />,
        <Resource name="tenderoffers" options={{ label: 'Tender Offers' }} list={DealList} show={DealShow} />,
        permissions === 'admin'
            ?  <Resource name="users" list={UserList} />
            : null,
    ]}
   </Admin>
);

export default App;