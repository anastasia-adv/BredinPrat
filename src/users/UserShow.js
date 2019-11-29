import React from 'react';
import { Show, Datagrid, ReferenceArrayField, TabbedShowLayout, Tab, TextField, DateField, EditButton, RichTextField } from 'react-admin';

export const UserShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="General Info">
                <TextField source="id" />
                <TextField source="username" />
                <TextField source="password" />
                <TextField source="role" />
            </Tab>
            <Tab label="Activity">
            <ReferenceArrayField reference="activities" source="activitiesId" addLabel={false}>
                    <Datagrid>
                        <TextField source="logindate" />
                        <TextField source="timeSpent" label="Time spent in minutes"/>
                    </Datagrid>
                </ReferenceArrayField>


                {/*<ArrayField source="users">
                    <Datagrid>
                        <DateField source="date" />
                        <TextField source="export" />
                    </Datagrid>
</ArrayField>*/}
            </Tab>
        </TabbedShowLayout>
    </Show>
);