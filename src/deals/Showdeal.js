import React from 'react';
import { Show, TabbedShowLayoutTabs, TextField, DateField, EditButton, RichTextField, NumberField, TabbedShowLayout, Tab } from 'react-admin';
import { Grid, Row, Col } from 'react-flexbox-grid';

const DealTitle = ({ record }) => {
    console.log(record);
    return <span>{record.Target}</span>;
};

export const DealShow = (props) => (
    <Grid className="offer-grid">
        <Show {...props} title={<DealTitle />}>

            <TabbedShowLayout tabs={<TabbedShowLayoutTabs scrollable scrollButtons={'on'} {...props} />} className="tabs-offer">
                <Tab label="MAIN CHARACTERISTICS">
                    <TextField source="Target" />
                    <TextField source="Alternext (devenu Euronext Growth)/  Euronext" />
                    <TextField source="Sector" />
                    <TextField source="Bidder/Concert Controlling shareholder " />
                    <TextField source="Offer filed by PE Funds, Family office or Venture Capital Funds" />
                    <TextField source="Pre-offer period Starting Date " />
                    <TextField source="Filing Date" />
                    <TextField source="Clearance Date" />
                    <TextField source="Offer Type " />
                    <TextField source="Price Increase  (Surenchère) % distinguer surenchère auto post achat/négocié" />
                    <TextField source="Competing Offer" />
                    <TextField source="Mandatory /Voluntary " />
                    <TextField source="Put up Shut up" />
                    <TextField source="Friendly/Non-solicited " />
                </Tab>
                <Tab label="BLOCK PURCHASE" >
                    <TextField source="Block Purchase %" />
                    <TextField source=" Top Up (droit de suite) granted to the Sellers of the block  " />
                    <TextField source="Adjustment of the price of the block  (Complément / ajustement de prix)" />
                </Tab>
                <Tab label="OFFER PRICE">
                    <TextField source="Top Up (droit de suite)  granted to the minority shareholders" />
                    <TextField source="Adjustment of the Offer Price  (Complément / ajustement de prix)" />
                    <TextField source="Squeeze out Kicker % of the Offer Price" />
                    <TextField source="Price increase between filing and clearance" />
                    <TextField source="Dividend Distribution during the Offer Period" />
                </Tab>
                <Tab label="OTHER AGREEMENTS" >
                    <TextField source="Cleara-nce Date" />
                    <TextField source="Offer Type Comments" />
                    <NumberField source="Amount" options={{ style: 'currency', currency: 'EUR' }} />
                </Tab>
                <Tab label="PRE-OFFER CONDITIONS" >

                </Tab>
                <Tab label="OFFER CONDITIONS" >

                </Tab>
                <Tab label="BIDDER'S INTENTIONS" >

                </Tab>
                <Tab label="SHARES TARGETED OR EXCLUDED BY THE OFFER" >

                </Tab>
                <Tab label="CW - DN" >

                </Tab>
                <Tab label="PREMIUM" >

                </Tab>
                <Tab label="STAKE OWNED BY THE BIDDER" >

                </Tab>
                <Tab label="EL" >

                </Tab>
                <Tab label="SQUEEZE OUT" >

                </Tab>
                <Tab label="FAIRNESS OPINION" >

                </Tab>
                <Tab label="TARGET BOARD APPROVAL PROCESS" >

                </Tab>
                <Tab label="FR - GC" >

                </Tab>

            </TabbedShowLayout >

        </Show>
    </Grid>
);

export default DealShow;