import React from 'react';
import { Filter, DateInput, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List  {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
        </Datagrid>
    </List>
);