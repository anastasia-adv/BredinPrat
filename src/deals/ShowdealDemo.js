import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField, NumberField, TabbedShowLayout, Tab } from 'react-admin';

export const DealShowDemo = (props) => (
    <Show {...props}>
        <TabbedShowLayout >
            <Tab label="General Info">
                <TextField source="id" />
                <TextField source="Target" label="Test"/>
                <TextField source="Target Type" />
            </Tab>
            <Tab label="Other info" path="body">
                <TextField source="Clearance Date" />
                <TextField source="Offer Type Comments" />
                <NumberField source="Amount" options={{ style: 'currency', currency: 'EUR' }} />
            </Tab> 
        </TabbedShowLayout >
    </Show>
);

export default DealShowDemo;