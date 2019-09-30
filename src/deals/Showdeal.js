import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField, NumberField } from 'react-admin';

export const DealShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField source="id" />
            <TextField source="Target" />
            <TextField source="Target Type" />
            <TextField source="Clearance Date" />
            <TextField source="Offer Type Comments" />
            <NumberField source="Amount" options={{ style: 'currency', currency: 'EUR' }} />
        </SimpleShowLayout>
    </Show>
);

export default DealShow;