import React from 'react';
import { Filter, DateInput, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, NumberField } from 'react-admin';
import AddColButton from './AddColButton';

const targetType = [
    { target_type: 'Alternext' },
    { target_type: 'Euronext' },
];


const DealFilter = (props) => (
    
    
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <SelectInput
            source="Target Type"
            choices={[
                { id: 'Alternext', name: 'Alternext' },
                { id: 'Euronext', name: 'Euronext' },
            ]}
        />
        <SelectInput
            source="Offer Type"
            choices={[
                { id: 'OPAS', name: 'OPAS' },
                { id: 'OPRA', name: 'OPRA' },
                { id: 'OPR', name: 'OPR' },
            ]}
        />
        <DateInput source="Clearance Date" />
        <TextInput source="Amount_gte" label="Min amount"/>
    </Filter>
);

export const DealList = props => (
    <div>
        <AddColButton/>
        <List filters={<DealFilter />} {...props}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="Target" />
                <TextField source="Target Type" />
                <TextField source="Clearance Date" />
                <TextField source="Offer Type Comments" />
                <NumberField source="Amount" options={{ style: 'currency', currency: 'EUR' }} />
            </Datagrid>
        </List>
    </div>
);