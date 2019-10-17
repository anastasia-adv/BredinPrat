import React from 'react';
import { Filter, CheckboxGroupInput, DateInput, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, NumberField, FilterForm } from 'react-admin';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/lab/Slider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

var arr = [];

/*const AmountCursorField = ({ record = {} }) => <span>{record.firstName} {record.lastName}</span>;
AmountCursorField.defaultProps = { label: 'Name' };*/

const DealFilter = (props) => (
        <div>
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
                                        source="Target Type"
                                        choices={[
                                            { id: 'Alternext', name: 'Alternext' },
                                            { id: 'Euronext', name: 'Euronext' },
                                        ]}
                                        alwaysOn
                                    />
                                    <SelectInput
                                        source="Offer Type"
                                        choices={[
                                            { id: 'OPAS', name: 'OPAS' },
                                            { id: 'OPRA', name: 'OPRA' },
                                            { id: 'OPR', name: 'OPR' },
                                        ]}
                                        alwaysOn
                                    />
                                
                                    <TextInput source="Amount_gte" label="Min amount" alwaysOn/>
                                    <TextInput source="Amount_lte" label="Max amount" alwaysOn/>
                                    <CheckboxGroupInput source="Amount" choices={[
                                        { id: 'test', name: 'Test' },
                                    ]} alwaysOn/>
                                </Filter>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col xs={2} md={2}>
                        <Button onClick={() => props.setFilters({
                            'Clearance Year': '',
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

class DealListDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_col: ["id", "Target", "Target Type", "Clearance Date", "Offer Type Comments", "Amount"],
            groupe1: ["A", "B"],
            checkedCol: false,
            defaultcol: true
           };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange  = this.handleChange.bind(this);
    }

    handleClick(){
        const coldiv = document.getElementById('col-selection');
        coldiv.classList.toggle('is-nav-open');
    }

    handleChange(checkstate, elt){
        console.log(this.state[checkstate]);
        console.log(checkstate);
        this.setState({[checkstate]: !this.state[checkstate]}, function () {
            console.log(elt);
            console.log(this.state[checkstate]);
            if(this.state[checkstate] == true  && !this.state.display_col.includes(elt)){
                this.setState({display_col: [...this.state.display_col, elt]}); 
            };
            if(this.state[checkstate] == false && this.state.display_col.includes(elt)){
                var array = [...this.state.display_col];
                for( var i = 0; i < array.length; i++){ 
                    if ( array[i] === elt) {
                        array.splice(i, 1); 
                    }
                }
                console.log(array);
                this.setState({display_col: array}, function(){
                    console.log(this.state.display_col);
                }); 
            };
            console.log(this.state[checkstate]);
        });   
    };

    /*shouldComponentUpdate(nextProps, nextState){
        if(this.state.display_col != nextState.display_col){
            return true;
        }
        return false;
    }*/


    render() {
        const{...props} =  this.props;

        const Aside = ({ data, ids }) => (
            <div id="col-selection" className="col-selection">
                {ids.map(function(id) {
                    for(var key in data[id]){
                        if(!arr.includes(key)){
                            arr.push(key);
                        }
                    }
                })}
                <Typography variant="h6">Column selection</Typography>
                {arr.map((elt, i) => {
                    console.log(elt);
                    if(this.state.display_col.includes(elt)){
                        return(
                            <label className="checkbox" key={i}>
                                <Checkbox
                                    checked={this.state.defaultcol}
                                    onChange={() => this.handleChange("defaultcol", elt)}
                                    value={elt}
                                />
                                <span>{elt}</span>
                            </label>
                        )
                    }else{
                        return(
                            <label className="checkbox" key={i}>
                                <Checkbox
                                    checked={this.state.checkedCol}
                                    onChange={() => this.handleChange("checkedCol", elt)}
                                    value={elt}
                                />
                                <span>{elt}</span>
                            </label>
                        )
                    }
                }, this)}
                <label className="checkbox" key="groupe1">
                    <Checkbox
                        checked={this.state.checkedCol}
                        onChange={() => this.handleChange("checkedCol", this.state.groupe1)}
                        value="groupe1"
                    />
                    <span>Groupe 1</span>
                </label>
            </div>    
        );

        var col = [...this.state.display_col]
        const ColToDisplay = col.flat(1).map((elt, i) => {
            console.log(elt);
            if(elt == "Amount"){
                return  <NumberField key={i} source={elt} options={{ style: 'currency', currency: 'EUR' }} />;
            }else{
                return <TextField key={i} source={elt} />;
            }
        })

       

        return(<div>
            <Button onClick={this.handleClick}>Display column</Button>
            <List  filters={<DealFilter/>} {...props} aside={<Aside />}>
                <Datagrid rowClick="show">
                    {ColToDisplay}
                </Datagrid>
            </List>
        </div>) ;
    }

}  

export default DealListDemo;