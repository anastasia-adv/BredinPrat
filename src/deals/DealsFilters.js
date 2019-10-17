import React from 'react';
import { Filter, CheckboxGroupInput, DateInput, RadioButtonGroupInput, SelectInput, TextInput, List, Datagrid, TextField, NumberField, FilterForm } from 'react-admin';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export const DealFilter = (props) => (
    <div className="filters">
    <Filter {...props} >
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
    <ExpansionPanel className="filters-panel">
        <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
            <Typography>Recherche avancée</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails id="filters">
        <Grid fluid>
            <Row>
                <Col xs={10} md={10}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                General Information
                            </Typography>
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
                                <SelectInput
                                    source="FILTERPre-offer Period "
                                    label="Pre-offer Period"
                                    choices={[
                                        { id: 'Yes', name: 'Yes' },
                                        { id: 'No', name: 'No' },
                                    ]}
                                    alwaysOn
                                />
                                 <SelectInput
                                    source="FILTER Offer type"
                                    label="Offer Type"
                                    choices={[
                                        { id: 'OPAS > 10%', name: 'OPAS > 10%' },
                                        { id: 'OPAS < 10%', name: 'OPAS < 10%' },
                                        { id: 'OPAS prior delisting', name: 'OPAS prior delisting' },
                                        { id: 'OPRA > 10%', name: 'OPRA > 10%' },
                                        { id: 'OPR-RO', name: 'OPR-RO' },
                                        { id: 'RO', name: 'RO' },
                                        { id: 'OPA', name: 'OPA' },
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
                                    source="Simultaneous offer made or registered abroad"
                                    label="Simultaneous offer abroad"
                                    choices={[
                                        { id: 'No', name: 'No' },
                                        { id: 'Offer for Target shares made in the US (exemption from registration)', name: 'Offer for Target shares made in the US (exemption from registration)' },
                                        { id: 'Private placement of Bidder\'s shares in the US', name: 'Private placement of Bidder\'s shares in the US' },
                                        { id: 'Offer for Target shares registered in the US', name: 'Offer for Target shares registered in the US' },
                                        { id: 'Offer on a listed subsidiary of Target', name: 'Offer on a listed subsidiary of Target' },
                                        { id: 'Offer for Target shares made in the US (exemption from registration) and in Switzerland', name: 'Offer for Target shares made in the US (exemption from registration) and in Switzerland' },
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
                               <RadioButtonGroupInput 
                                    source="Offers filed by PE Funds, Family office or Venture Capital Funds"
                                    choices={[
                                        { id: 'Yes', name: 'Yes' },
                                        { id: 'No', name: 'No' },
                                    ]}
                                    alwaysOn
                                />
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
                                        { id: 'N/A', name: 'N/A' },
                                    ]}
                                    alwaysOn
                                />
                                
                            </Filter>
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={2} md={2}>
                    <Button onClick={() => props.setFilters({
                        'Alternext/Euronext': '',
                        'Pre-offer Period':'',
                        'Offer Type': '',
                        'Clearance Year': '',
                        'Amount_gte': '',
                        'Offer Type': '',
                        'Target Type' : '',
                        'q': ''
                    })}>Clear fields</Button>
                </Col>
                <Col xs={10} md={10} className="space-up">
                    <Card>
                        <CardContent>
                            <Filter {...props} >
                                <RadioButtonGroupInput 
                                    source="FILTERTop Up (droit de suite) granted to the Sellers of the block "
                                    label="Top Up (Sellers of the block)"
                                    choices={[
                                        { id: 'Yes', name: 'Yes' },
                                        { id: 'No', name: 'No' },
                                    ]}
                                    alwaysOn
                                />
                                <RadioButtonGroupInput 
                                    source="FILTERPrice Adjustment of the price of the block (Complément / ajustement de prix)"
                                    label="Price Adjustment of the price of the block"
                                    choices={[
                                        { id: 'Yes', name: 'Yes' },
                                        { id: 'No', name: 'No' },
                                    ]}
                                    alwaysOn
                                />
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
                                    source="FILTERPrice Adjustment of the Offer Price (Complément / ajustement de prix)"
                                    label="Price Adjustment of the Offer Price"
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
                            </Filter>
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={10} md={10} className="space-up">
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Fairness Opinion Voluntary/Mandatory
                            </Typography>
                            <Filter {...props} >
                                <SelectInput
                                    source="Fairness opinion Yes/No"
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
                            </Filter>
                        </CardContent>
                    </Card>
                </Col>
                <Col xs={10} md={10} className="space-up">
                    <Card>
                        <CardContent>
                            <Filter {...props} >
                                <TextInput source="Amount_gte" label="Min amount" alwaysOn/>
                                <DateInput source="Clearance Date" alwaysOn/>
                                <CheckboxGroupInput source="Clearance Year" choices={[
                                    { id: '2016', name: '2016' },
                                    { id: '2017', name: '2017' },
                                    { id: '2018', name: '2018' },
                                    ]} alwaysOn/>
                            </Filter>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Grid>
        </ExpansionPanelDetails>
    </ExpansionPanel>
</div>
);
