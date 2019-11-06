import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField, NumberField, TabbedShowLayout, Tab } from 'react-admin';

const DealTitle = ({ record }) => {
    console.log(record);
    return <span>{record.Target}</span>;
};

export const DealShow = (props) => (
    <Show {...props} title={<DealTitle />}>
        <TabbedShowLayout >
            <Tab label="General Info">
                <TextField source="Target" />
                <TextField source="Alternext (devenu Euronext Growth)/ Euronext" />
                <TextField source="Sector" />
                <TextField source="Bidder/ConcertControlling shareholder " />
                <TextField source="Pre-offer periodStarting Date " />
                <TextField source="Filing Date" />
                <TextField source="Clearance Date" />
                <TextField source="Offer Type " />
                <TextField source="Simultaneous offer made or registered abroad" />
                <TextField source="Offers filed by PE Funds, Family office or Venture Capital Funds" />
            </Tab>
            <Tab label="Other Info 1" >
                <TextField source="Mandatory /Voluntary " />
                <TextField source="Put up Shut up" />
                <TextField source="Friendly/Non-solicited " />
                <TextField source="Fairness OpinionVoluntary/Mandatory" />
                <TextField source="Independent Expert" />
                <TextField source="Fees of the Independent Expert When a range was indicated, we selected the highest amount" />
                <TextField source="Block Purchase% " />
                <TextField source="Top Up (droit de suite) granted to the Sellers of the block" />
                <TextField source="Price Adjustment of the price of the block (Complément / ajustement de prix)" />
                <TextField source="Top Up (droit de suite)  granted to the minority shareholders" />
                <TextField source="Price Adjustment of the Offer Price (Complément / ajustement de prix)" />
                <TextField source="Squeeze out Kicker% of the Offer Price" />
            </Tab>
            <Tab label="Other info 2" path="body">
                <TextField source="Clearance Date" />
                <TextField source="Offer Type Comments" />
                <NumberField source="Amount" options={{ style: 'currency', currency: 'EUR' }} />
            </Tab> 
        </TabbedShowLayout >
    </Show>
);

export default DealShow;