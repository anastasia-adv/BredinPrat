import React from 'react';
import { Admin, Resource, ShowGuesser, EditGuesser } from 'react-admin';
import { DealList } from './deals/Listdeals';
import { UserList } from './users/Listusers';
import { DealShow } from './deals/Showdeal';
import authProvider from './admin/authProvider';
import jsonServerProvider from 'ra-data-json-server';
import Home from './Home';

const dataProvider = jsonServerProvider(' http://localhost:5000');

const App = () => (
    <Admin dashboard={Home} dataProvider={dataProvider} authProvider={authProvider}>
      {permissions => [
        <Resource name="deals" list={DealList} show={DealShow} />,
        permissions === 'admin'
            ?  <Resource name="users" list={UserList} />
            : null,
    ]}
   </Admin>
);

export default App;