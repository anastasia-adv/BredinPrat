import React from 'react';
import { Filter, DateInput, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List  {...props} exporter={false} sort={{ field: 'id', order: 'ASC' }}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="password" />
            <TextField source="role" />
        </Datagrid>
    </List>
);