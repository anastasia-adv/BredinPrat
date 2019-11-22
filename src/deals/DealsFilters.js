import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Filter, CheckboxGroupInput, DateInput, RadioButtonGroupInput, SelectInput, TextInput, List, Datagrid, TextField, NumberField, FilterForm } from 'react-admin';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CardContent from '@material-ui/core/CardContent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        <Box p={3}>{children}</Box>
        </Typography>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function DealFilter(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return(
        <div className="filters-panel">
            
            <Filter {...props} >
                <TextInput label="Search" source="q" alwaysOn />
            </Filter>
            <Button 
                className="clear-filters"
                startIcon={<HighlightOffIcon color="secondary"/>} 
                onClick={() => props.setFilters({
                            'Alternext/Euronext': '',
                            'Pre-offer Period':'',
                            'Offer Type': '',
                            'Clearance Year': '',
                            'Amount_gte': '',
                            'Offer Type': '',
                            'Target Type' : '',
                            'q': ''
                        })}>Clear fields</Button>
            <ExpansionPanel className="filters-panel">
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Recherche avancée</Typography>
                </ExpansionPanelSummary>
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on">
                        <Tab label="MAIN CHARACTERISTICS" {...a11yProps(0)} />
                        <Tab label="BLOCK PURCHASE" {...a11yProps(1)} />
                        <Tab label="OFFER PRICE" {...a11yProps(2)} />
                        <Tab label="OTHER AGREEMENTS" {...a11yProps(3)} />
                        <Tab label="PRE-OFFER CONDITIONS" {...a11yProps(4)} />
                        <Tab label="OFFER CONDITIONS" {...a11yProps(5)} />
                        <Tab label="BIDDER'S INTENTIONS" {...a11yProps(6)} />
                        <Tab label="SHARES TARGETED OR EXCLUDED BY THE OFFER" {...a11yProps(7)} />
                        <Tab label="CW - DN" {...a11yProps(8)} />
                        <Tab label="PREMIUM" {...a11yProps(9)} />
                        <Tab label="STAKE OWNED BY THE BIDDER" {...a11yProps(10)} />
                        <Tab label="EL" {...a11yProps(11)} />
                        <Tab label="SQUEEZE OUT" {...a11yProps(12)} />
                        <Tab label="FAIRNESS OPINION" {...a11yProps(13)} />
                        <Tab label="TARGET BOARD APPROVAL PROCESS" {...a11yProps(14)} />
                        <Tab label="FR - GC" {...a11yProps(15)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                <Filter {...props} >
                    <SelectInput
                        source="Alternext (devenu Euronext Growth)/ Euronext"
                        label="Alternext/Euronext"
                        choices={[
                            { id: 'Alternext', name: 'Alternext' },
                            { id: 'Euronext', name: 'Euronext' },
                        ]}
                        alwaysOn
                    />
                    <RadioButtonGroupInput 
                        source="Offers filed by PE Funds, Family office or Venture Capital Funds"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERPre-offer Period "
                        label="Pre-offer Period"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />

                    <CheckboxGroupInput source="Clearance Year" choices={[
                        { id: '2016', name: '2016' },
                        { id: '2017', name: '2017' },
                        { id: '2018', name: '2018' },
                        ]} alwaysOn/>

                    <SelectInput
                        source="FILTER Offer type"
                        label="Offer Type"
                        choices={[
                            { id: 'OPAS Share buy back', name: 'OPAS Share buy back' },
                            { id: 'OPAS ≤ 10%', name: 'OPAS ≤ 10%' },
                            { id: 'OPAS prior delisting', name: 'OPAS prior delisting' },
                            { id: 'OPRA > 10%', name: 'OPRA > 10%' },
                            { id: 'OPR-RO', name: 'OPR-RO' },
                            { id: 'RO', name: 'RO' },
                            { id: 'OPA', name: 'OPA' },
                            { id: 'OPAS', name: 'OPAS' },
                            { id: 'OPE', name: 'OPE' },
                            { id: 'Mixed offer', name: 'Mixed offer' },
                            { id: 'Alternative offer', name: 'Alternative offer' },
                            { id: 'OPR - Art. 236-1', name: 'OPR - Art. 236-1' },
                            { id: 'OPR - Art. 236-3', name: 'OPR - Art. 236-3' },
                            { id: 'OPR - Art. 236-6', name: 'OPR - Art. 236-6' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Price Increase (Surenchère)"
                        label="Price Increase (Surenchère)"
                        choices={[
                            { id: 'No', name: 'No' },
                            { id: 'Yes automatic', name: 'Yes automatic' },
                            { id: 'Yes voluntary', name: 'Yes voluntary' },
                        ]}
                        alwaysOn
                    />

                    <SelectInput
                        source="Competing Offer"
                        label="Competing Offer"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />

                    <SelectInput
                        source="Mandatory /Voluntary "
                        label="Mandatory /Voluntary"
                        choices={[
                            { id: 'Voluntary', name: 'Voluntary' },
                            { id: 'Mandatory', name: 'Mandatory' },
                            { id: 'Mandatory Art. 234-5', name: 'Mandatory Art. 234-5' },
                        ]}
                        alwaysOn
                    />

                    <SelectInput
                        source="Friendly/Non-solicited "
                        label="Friendly/Non-solicited"
                        choices={[
                            { id: 'Friendly', name: 'Friendly' },
                            { id: 'Non solicited', name: 'Non solicited' },
                        ]}
                        alwaysOn
                    />  
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <Filter {...props} >
                    <SelectInput
                        source="FILTER Block Purchase"
                        label="Block Purchase"
                        choices={[
                            { id: 'No', name: 'No' },
                            { id: 'Between 0 and 10 %', name: 'Between 0 and 10 %' },
                            { id: 'Between 10 and 20 %', name: 'Between 10 and 20 %' },
                            { id: 'Between 20 and 30 %', name: 'Between 20 and 30 %' },
                            { id: 'Between 30 and 40 %', name: 'Between 30 and 40 %' },
                            { id: 'Between 40 and 50 %', name: 'Between 40 and 50 %' },
                            { id: 'Higher than 50%', name: 'Higher than 50%' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Direct or Indirect purchase of an holding in Target"
                        label="Direct or Indirect purchase of an holding in Target"
                        choices={[
                            { id: 'Direct', name: 'Direct' },
                            { id: 'Direct and indirect', name: 'Direct and indirect' },
                            { id: 'Indirect', name: 'Indirect' },
                        ]}
                        alwaysOn
                    />
                    <RadioButtonGroupInput 
                        source="FILTERTop Up (droit de suite) granted to the Sellers of the block"
                        label="Top Up (droit de suite) granted to the Sellers of the block"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <RadioButtonGroupInput 
                        source="FILTERAdjustment of the price of the block  (Complément / ajustement de prix)"
                        label="Adjustment of the price of the block  (Complément / ajustement de prix)"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                   
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <Filter {...props} >
                    <CheckboxGroupInput
                        source="FILTERTop up (droit de suite) granted to the minority shareholders"
                        label="Top up (minority shareholders)"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput
                        source="FILTERAdjustment of the Offer Price (Complément / ajustement de prix)"
                        label="Adjustment of the Offer Price (Complément / ajustement de prix)"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput
                        source="FILTERSqueeze out Kicker"
                        label="Squeeze out Kicker"
                        choices={[
                            { id: 'yes', name: 'Yes' },
                            { id: 'no', name: 'No' },
                        ]}
                        optionValue="name"
                        alwaysOn
                    />
                    <CheckboxGroupInput
                        source="Price increase between filing and clearance"
                        label="Price increase between filing and clearance"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERDividend Distribution during the Offer Period"
                        label="Dividend Distribution during the Offer Period"
                        choices={[
                            { id: 'No', name: 'No' },
                            { id: 'Price excluding the dividend', name: 'Price excluding the dividend' },
                            { id: 'Price including the dividend', name: 'Price including the dividend' },
                            { id: 'Price excluding and including the dividend', name: 'Price excluding and including the dividend' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <Filter {...props} >
                    <CheckboxGroupInput
                        source="FILTER TOA "
                        label="TOA"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Shareholder's Undertaking to Tender  "
                        label="Shareholder's Undertaking to Tender"
                        choices={[
                            { id: 'No', name: 'No' },
                            { id: 'Undertaking to tender < 10%', name: 'Undertaking to tender < 10%' },
                            { id: 'Undertaking to tender < 10% irrevocable', name: 'Undertaking to tender < 10% irrevocable' },
                            { id: 'Undertaking to tender between 10% and 20%', name: 'Undertaking to tender between 10% and 20%' },
                            { id: 'Undertaking to tender between 20% and 30%', name: 'Undertaking to tender between 20% and 30%' },
                            { id: 'Undertaking to tender between 30% and 40%', name: 'Undertaking to tender between 30% and 40%' },
                            { id: 'Undertaking to tender > 50%', name: 'Undertaking to tender > 50%' },
                        ]}
                        alwaysOn
                    />
                    
                    <CheckboxGroupInput
                        source="FILTER Shareholder's Undertaking not to Tender"
                        label="Shareholder's Undertaking not to Tender"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />

                    <CheckboxGroupInput
                        source="Escrow of Target securities"
                        label="Escrow of Target securities"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: '', name: 'Vide' },
                        ]}
                        alwaysOn
                    />

                    <CheckboxGroupInput
                        source="FILTER Reinvestment "
                        label="Reinvestment"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />

                    <CheckboxGroupInput
                        source=" FILTERManagement Package "
                        label="Management Package"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />

                    <CheckboxGroupInput
                        source="FILTER Other Agreements "
                        label="Other Agreements"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <Filter {...props} >
                    <SelectInput
                        source="FILTERCP Block purchase - Antitrust"
                        label="CP Block purchase - Antitrust"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER CP Block purchase - Foreign investment"
                        label="CP Block purchase - Foreign investment"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER CP Block purchase - Other regulatory conditions"
                        label="CP Block purchase - Other regulatory conditions"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER CP Filing  - Antitrust"
                        label="CP Filing  - Antitrust"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER CP Filing - Foreign investment"
                        label="CP Filing - Foreign investment"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER CP Filing - Other regulatory conditions"
                        label="CP Filing - Other regulatory conditions"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERCP Block purchase - Target recommendation of the offer/Fairness"
                        label="CP Block purchase - Target recommendation of the offer/Fairness"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERCP Block purchase - Other CP"
                        label="CP Block purchase - Other CP"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERCP Filing - Target recommendation of the offer/Fairness"
                        label="CP Filing - Target recommendation of the offer/Fairness"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERCP Filing - Other"
                        label="CP Filing - Other"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={5}>
                <Filter {...props} >
                    <SelectInput
                        source="Opening of the offer subject to obtaining of regulatory authorization (Art. 231-32, 3°)"
                        label="Opening of the offer subject to obtaining of regulatory authorization (Art. 231-32, 3°)"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'Yes CFIUS', name: 'Yes CFIUS' },
                            { id: 'Yes Other', name: 'Yes Other' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTEROffer Conditions Mandatory Level of acceptances (Seuil de caducité - Art. 231-9 I)"
                        label="Offer Conditions Mandatory Level of acceptances (Seuil de caducité - Art. 231-9 I)"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'Exemption', name: 'Exemption' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTEROffer Conditions  Optional Level of acceptances(Seuil de renonciation - Art. 231-9 II)"
                        label="Offer Conditions  Optional Level of acceptances(Seuil de renonciation - Art. 231-9 II)"
                        choices={[
                            { id: '> 50%', name: '> 50%' },
                            { id: '> 65%', name: '> 65%' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Other Offer Conditions (As authorized by RG AMF)"
                        label="Other Offer Conditions (As authorized by RG AMF)"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={6}>
                <Filter {...props} >
                    <SelectInput
                        source="Simplified offerDescription of a new strategyYes/No/ N/A"
                        label="Simplified offerDescription of a new strategy"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Intention to initiate a squeeze out or reserve the right to do so"
                        label="Intention to initiate a squeeze out or reserve the right to do so"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERIntention to Merge following the Offer"
                        label="Intention to Merge following the Offer"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                            { id: 'Reserve the right', name: 'Reserve the right' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERIntention to make an exceptional dividend distribution or aDebt Push Down"
                        label="Intention to make an exceptional dividend distribution or a Debt Push Down"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                            { id: 'Reserve the right', name: 'Reserve the right' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERIntention to delist"
                        label="Intention to delist"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                            { id: 'Reserve the right', name: 'Reserve the right' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Intention to file a repurchase offer followed by a squeeze out (OPR-RO) if the squeeze out threshold is reached subsequently"
                        label="Intention to file a repurchase offer followed by a squeeze out (OPR-RO) if the squeeze out threshold is reached subsequently"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                            { id: '', name: 'Vides' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Amount of the synergies disclosed"
                        label="Amount of the synergies disclosed"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                            { id: '', name: 'Vides' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTEROther Relevant Intentions"
                        label="Other Relevant Intentions"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={7}>
                <Filter {...props} >
                    <SelectInput
                        source="FILTER Intent to Tender Treasury Shares"
                        label="Intent to Tender Treasury Shares"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'Yes, except certain treasury shares', name: 'Yes, except certain treasury shares' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Treasury sharesTargeted /Excluded "
                        label="Treasury shares Targeted /Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            { id: 'Targeted', name: 'Targeted' },
                            { id: 'Targeted and excluded', name: 'Targeted and excluded' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Free shares non vestedTargeted /Excluded "
                        label="Free shares non vested Targeted /Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            { id: 'Targeted', name: 'Targeted' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Free shares subject to lock-up Targeted /Excluded"
                        label="Free shares subject to lock-up Targeted /Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            { id: 'Targeted', name: 'Targeted' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Free shares subject to liquidity mechanism Targeted/ Excluded"
                        label="Free shares subject to liquidity mechanism Targeted/ Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            { id: 'Targeted', name: 'Targeted' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Shares likely to be issued upon exercise of securities or stock options or otherTargeted/Excluded"
                        label="Shares likely to be issued upon exercise of securities or stock options or other Targeted/Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            { id: 'Targeted', name: 'Targeted' },
                            { id: 'Targeted and excluded', name: 'Targeted and excluded' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Preferred sharesTargeted/Excluded"
                        label="Preferred shares Targeted/Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            { id: 'Targeted', name: 'Targeted' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Non listed securitiesTargeted/Excluded"
                        label="Non listed securities Targeted/Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            { id: 'Targeted', name: 'Targeted' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="OC/OCEANE/ORNANES/OSRATargeted"
                        label="OC/OCEANE/ORNANES/OSRA Targeted"
                        choices={[
                            { id: 'OC', name: 'OC' },
                            { id: 'OCEANE', name: 'OCEANE' },
                            { id: 'ORNANE', name: 'ORNANE' },
                            { id: 'OSRA', name: 'OSRA' },
                            { id: 'Other bonds giving access to capital', name: 'Other bonds giving access to capital' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="WarrantsBSA/BSAAR/BAARTargeted/Excluded"
                        label="Warrants BSA/BSAAR/BAAR Targeted/Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            { id: 'Targeted', name: 'Targeted' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source="Other securities Targeted" 
                        label="Other securities Targeted"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            ]} 
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source=" Securities owned by executivesExcluded " 
                        label="Securities owned by executives Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            ]} 
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source="Other securities Excluded" 
                        label="Other securities Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            ]} 
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source="Shares underlying put/call optionsExcluded" 
                        label="Shares underlying put/call options Excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            ]} 
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source="Securities subject to an undertaking NOT to tender" 
                        label="Securities subject to an undertaking NOT to tender"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            ]} 
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source="Shares PEE/FCPE excluded" 
                        label="Shares PEE/FCPE excluded"
                        choices={[
                            { id: 'Excluded', name: 'Excluded' },
                            ]} 
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={8}>
                <Filter {...props} >
                    <SelectInput
                        source="FILTER Liquidity Agreements with shareholders"
                        label="Liquidity Agreements with shareholders"
                        choices={[
                            { id: 'Contemplated', name: 'Contemplated' },
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Liquidity Agreements with shareholdersFixed or Variable Price"
                        label="Liquidity Agreements with shareholdersFixed or Variable Price"
                        choices={[
                            { id: 'Fixed or variable price', name: 'Fixed or variable price' },
                            { id: 'Fixed price', name: 'Fixed price' },
                            { id: 'Not indicated', name: 'Not indicated' },
                            { id: 'Variable price', name: 'Variable price' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTREDeal Value for 100%(other then OPRA and share buy back)"
                        label="Deal Value for 100%(other then OPRA and share buy back)"
                        choices={[
                            { id: '< 100M €', name: '< 100M €' },
                            { id: '100M € - 250M€', name: '100M € - 250M€' },
                            { id: '250M€ - 500M€', name: '250M€ - 500M€' },
                            { id: '500M€ - 1B€', name: '500M€ - 1B€' },
                            { id: '> 1B€', name: '> 1B€' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERDeal Value for the targeted shares - OPRA and share buy back"
                        label="Deal Value for the targeted shares - OPRA and share buy back"
                        choices={[
                            { id: '< 100M €', name: '< 100M €' },
                            { id: '100M € - 250M€', name: '100M € - 250M€' },
                            { id: '250M€ - 500M€', name: '250M€ - 500M€' },
                            { id: '500M€ - 1B€', name: '500M€ - 1B€' },
                            { id: '> 1B€', name: '> 1B€' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Simultaneous offer made or registered abroad "
                        label="Simultaneous offer made or registered abroad"
                        choices={[
                            { id: 'No', name: 'No' },
                            { id: 'Offer for Target shares made in the US (exemption from registration)', name: 'Offer for Target shares made in the US (exemption from registration)' },
                            { id: 'Private placement of Bidder\'s shares in the US', name: 'Private placement of Bidder\'s shares in the US' },
                            { id: 'Offer for Target shares registered in the US', name: 'Offer for Target shares registered in the US' },
                            { id: 'Offer on a listed subsidiary of Target', name: 'Offer on a listed subsidiary of Target' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERReimbursement of brokerage fee"
                        label="Reimbursement of brokerage fees"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERAccess to data room and inside information (other than Target BP)"
                        label="Access to data room and inside information (other than Target BP)"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Bidder - Communication of the Business Plan or not"
                        label="Bidder - Communication of the Business Plan or not"
                        choices={[
                            { id: 'Analyst consensus', name: 'Analyst consensus' },
                            { id: 'Bidder BP', name: 'Bidder BP' },
                            { id: 'Target BP', name: 'Target BP' },
                            { id: 'Other', name: 'Other' },
                            { id: 'Target BP and Bidder BP', name: 'Target BP and Bidder BP' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Ind. Expert - Communication of the Business Plan or not"
                        label="Ind. Expert - Communication of the Business Plan or not"
                        choices={[
                            { id: 'Analyst consensus', name: 'Analyst consensus' },
                            { id: 'Bidder BP', name: 'Bidder BP' },
                            { id: 'Target BP', name: 'Target BP' },
                            { id: 'Other', name: 'Other' },
                            { id: 'Target BP and Bidder BP', name: 'Target BP and Bidder BP' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={9}>
                <Filter {...props} >
                    <TextInput source="SPOT_gte" label="TODO" alwaysOn/>
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={10}>
                <Filter {...props} >
                    <TextInput source="FILTER Initial_gte" label="Initial" alwaysOn/>
                    <TextInput source="FILTER At filing_gte" label="At filing" alwaysOn/>
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={11}>
                <Filter {...props} >
                    <SelectInput
                        source="FILTERMarket Purchase during the offer period (other than during the offer)"
                        label="Market Purchase during the offer period (other than during the offer)"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={12}>
                <Filter {...props} >
                    <SelectInput
                        source="FILTERSqueeze out Completed following the Offer"
                        label="Squeeze out Completed following the Offer"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'Failed', name: 'Failed' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Squeeze out completed following a subsequent offer"
                        label="Squeeze out completed following a subsequent offer"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTRE Green Mailing preventing to reach 90% "
                        label="Green Mailing preventing to reach 90%"
                        choices={[
                            { id: 'Maybe', name: 'Maybe' },
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={13}>
                <Filter {...props} >
                    <SelectInput
                        source="FILTERFairness opinionYes/No"
                        label="Fairness opinion"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput
                        source="FILTERArt. 261-1, I, 1°"
                        label="Art. 261-1, I, 1°"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput
                        source="FILTERArt. 261-1, I, 2°"
                        label="Art. 261-1, I, 2°"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput
                        source="FILTERArt. 261-1, I, 3°"
                        label="Art. 261-1, I, 3°"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput
                        source="FILTERArt. 261-1, I, 4°"
                        label="Art. 261-1, I, 4°"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput
                        source="FILTERArt. 261-1, I, 5°"
                        label="Art. 261-1, I, 5°"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source="FILTERArt. 261-1, I, 6°"
                        label="Art. 261-1, I, 6°"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source="FILTERArt. 261-1, II"
                        label="Art. 261-1, II"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                        ]}
                        alwaysOn
                    />
                    <CheckboxGroupInput 
                        source="FILTERArt. 261-3"
                        label="Art. 261-3"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="AMF request to appoint a new independent expert Yes/No / N/A"
                        label="AMF request to appoint a new independent expert Yes/No / N/A"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="AMF objection to the appointment of the new independent expert proposed by Target upon AMF's requestYes/No/ N/A"
                        label="AMF objection to the appointment of the new independent expert proposed by Target upon AMF's requestYes/No/ N/A"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="AMF objection to the appointment of the independent expert proposed by Target if no ad hoc committee was set upYes/No/N/A"
                        label="AMF objection to the appointment of the independent expert proposed by Target if no ad hoc committee was set upYes/No/N/A"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={14}>
                <Filter {...props} >
                    <SelectInput
                        source="FILTERAd Hoc Committee"
                        label="Ad Hoc Committee"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="Conflicted Directors if disclosed as such in the offer document"
                        label="Conflicted Directors if disclosed as such in the offer document"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Abstention of the Disclosed Conflicted Directors "
                        label="Abstention of the Disclosed Conflicted Directors"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTERBoard members' Attendance/Absence"
                        label="Board members' Attendance/Absence"
                        choices={[
                            { id: 'All board members present or represented', name: 'All board members present or represented' },
                            { id: 'Less than all board members were present or represented', name: 'Less than all board members were present or represented' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Recommendation to tender"
                        label="Recommendation to tender"
                        choices={[
                            { id: 'Majority', name: 'Majority' },
                            { id: 'Not recommended', name: 'Not recommended' },
                            { id: 'Unanimous', name: 'Unanimous' },
                        ]}
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
                <TabPanel value={value} index={15}>
                <Filter {...props} >
                    {/*<TextInput source="Amount_gte" label="Min amount" alwaysOn/>
                    <DateInput source="Clearance Date" alwaysOn/>*/}
                    <SelectInput
                        source="FILTER Opinion of the workers council on the offer"
                        label="Opinion of the workers council on the offer"
                        choices={[
                            { id: 'Favorable', name: 'Favorable' },
                            { id: 'Negative', name: 'Negative' },
                            { id: 'Other', name: 'Other' },
                        ]}
                        alwaysOn
                    />
                    <SelectInput
                        source="FILTER Litigation//Complaints"
                        label="Litigation//Complaints"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                            { id: 'Complaints from minority shareholders', name: 'Complaints from minority shareholders' },
                        ]}
                       
                        alwaysOn
                    />
                    <SelectInput
                        source="Deal advised by Bredin Prat "
                        label="Deal advised by Bredin Prat"
                        choices={[
                            { id: 'Yes', name: 'Yes' },
                            { id: 'No', name: 'No' },
                        ]}
                       
                        alwaysOn
                    />
                </Filter>
                </TabPanel>
            </ExpansionPanel>
        </div>
    );
}
