import React from 'react';
import { Show, TabbedShowLayout, Tab, TextField, DateField, EditButton, RichTextField } from 'react-admin';

export const UserShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="General Info">
                <TextField source="id" />
                <TextField source="username" />
                <TextField source="password" />
                <TextField source="role" />
            </Tab>
            <Tab label="Filters"></Tab>
        </TabbedShowLayout>
    </Show>
);