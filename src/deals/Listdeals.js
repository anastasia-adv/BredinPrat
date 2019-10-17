import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import {DealFilter} from './DealsFilters';
import {RefreshButton} from 'ra-ui-materialui';
import CheckIcon from '@material-ui/icons/Check';

var arr = [];

/*const AmountCursorField = ({ record = {} }) => <span>{record.firstName} {record.lastName}</span>;
AmountCursorField.defaultProps = { label: 'Name' };*/


class DealList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col_list:[
                {name: "id", checked: true},
                {name: "Target", checked: true},
                {name: "Alternext (devenu Euronext Growth)/ Euronext", checked: false},
                {name: "Sector", checked: false},
                {name: "Bidder/ConcertControlling shareholder ", checked: true},
                {name: "Pre-offer periodStarting Date ", checked: false},
                {name: "Filing Date", checked: false},
                {name: "Clearance Date", checked: true},
                {name: "Offer Type ", checked: true},
                {name: "Simultaneous offer made or registered abroad", checked: false},
                {name: "Offers filed by PE Funds, Family office or Venture Capital Funds", checked: false},
                {name: "Mandatory /Voluntary ", checked: false},
                {name: "Put up Shut up", checked: false},
                {name: "Friendly/Non-solicited ", checked: false},
                {name: "Fairness OpinionVoluntary/Mandatory", checked: false},
                {name: "Independent Expert", checked: false},
                {name: "Fees of the Independent Expert When a range was indicated, we selected the highest amount", checked: false},
                {name: "Block Purchase% ", checked: false},
                {name: "Top Up (droit de suite) granted to the Sellers of the block", checked: false},
                {name: "Price Adjustment of the price of the block (Complément / ajustement de prix)", checked: false},
                {name: "Top Up (droit de suite)  granted to the minority shareholders", checked: false},
                {name: "Price Adjustment of the Offer Price (Complément / ajustement de prix)", checked: false},
                {name: "Squeeze out Kicker% of the Offer Price", checked: false},
            ],
            groupe1: ["A", "B"],
            checkedCol: false,
            defaultcol: true,
            right: false,
           };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleChange  = this.handleChange.bind(this);
    }

    toggleDrawer(){
        //console.log(this.state.right);
        this.setState({right: !this.state.right}, function () {
            console.log(this.state.right);
        });
        
    };

    handleChange(elt, index){
        console.log(elt);
        var cloneColList = JSON.parse(JSON.stringify(this.state)).col_list;
        cloneColList[index].checked = !elt.checked;
        this.setState({col_list: cloneColList}, function () {
            console.log(this.state.col_list);
        });
    }

    /*shouldComponentUpdate(nextState) {
        console.log(this.props);
        console.log(this.state.col_list != nextState.col_list);
        return JSON.stringify(this.state.col_list) != JSON.stringify(nextState.col_list);
    };*/
    
    render() {
        const{...props} =  this.props;

        /*var col = [...this.state.display_col]
        const ColToDisplay = col.flat(1).map((elt, i) => {
            console.log(elt);
            if(elt == "Fees of the Independent Expert When a range was indicated, we selected the highest amount"){
                return  <NumberField key={i} source={elt} options={{ style: 'currency', currency: 'EUR' }} />;
            }else{
                return <TextField key={i} source={elt} />;
            }
        })*/

        var col = [...this.state.col_list]
        const ColToDisplay = col.map((elt, i) => {
            //console.log(elt);
            if(elt.checked == true){
                if(elt.name == "Fees of the Independent Expert When a range was indicated, we selected the highest amount"){
                    return  <NumberField key={i} source={elt.name} options={{ style: 'currency', currency: 'EUR' }} />;
                }else{
                    return <TextField key={i} source={elt.name} />;
                }
            }
        });

        const sideList = side => (
            <div className="select-col" role="presentation">
                {col.map((elt, i) => {
                    return(
                        <label className="checkbox" key={i}>
                            <Checkbox
                                checked={elt.checked}
                                onChange={() => this.handleChange(elt, i)}
                                value={elt.checked}
                                className="col-checkbox"
                            />
                            <span className="span-checkbox">{elt.name}</span>
                        </label>
                    );
                    
                })}
            </div>
          );

       

        return(<div>
            <Button onClick={this.toggleDrawer}>Select Column</Button>
            <List  filters={<DealFilter/>} {...props} bulkActions={false} >
                <Datagrid rowClick="show">
                    {ColToDisplay}
                </Datagrid>
            </List>
            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer} >
                <Typography variant="overline" className="instruction">Sélectionnez les colonnes à afficher puis clickez sur Valider.</Typography>
                <RefreshButton label="Valider" icon={<CheckIcon/>} className="validate-selection"/>
                {sideList('right')}
            </Drawer>
        </div>) ;
    }

}  

export default DealList;