import React from 'react';
import { List, Datagrid, TextField, NumberField, Pagination } from 'react-admin';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import DealFilter from './DealsFilters';
import { RefreshButton, ExportButton } from 'ra-ui-materialui';
import CheckIcon from '@material-ui/icons/Check';
import axios from "axios";
import { unparse as convertToCSV } from 'papaparse';
import queryString from 'query-string';
import { makeStyles } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

var arr = [];

/*const AmountCursorField = ({ record = {} }) => <span>{record.firstName} {record.lastName}</span>;
AmountCursorField.defaultProps = { label: 'Name' };*/


class DealList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col_list: [
                { name: "id", checked: true, family_name: "MAIN CHARACTERISTICS" },
                { name: "Target", checked: true, family_name: "MAIN CHARACTERISTICS" },
                { name: "Alternext (devenu Euronext Growth)/  Euronext", checked: false, family_name: "MAIN CHARACTERISTICS" },
                { name: "Sector", checked: false, family_name: "MAIN CHARACTERISTICS" },
                { name: "Bidder/Concert Controlling shareholder ", checked: true, family_name: "MAIN CHARACTERISTICS" },
                { name: "Offer filed by PE Funds, Family office or Venture Capital Funds", checked: false, family_name: "MAIN CHARACTERISTICS" },
                { name: "Pre-offer period Starting Date ", checked: false, family_name: "MAIN CHARACTERISTICS" },
                { name: "Filing Date", checked: false, family_name: "MAIN CHARACTERISTICS" },
                { name: "Clearance Date", checked: true, family_name: "MAIN CHARACTERISTICS" },
                { name: "Offer Type ", checked: true, family_name: "MAIN CHARACTERISTICS" },
                { name: "Price Increase  (Surenchère) % distinguer surenchère auto post achat/négocié", checked: false, family_name:"MAIN CHARACTERISTICS"  },
                { name: "Competing Offer", checked: false, family_name:"MAIN CHARACTERISTICS"  },
                { name: "Mandatory /Voluntary ", checked: false, family_name:"MAIN CHARACTERISTICS"  },
                { name: "Put up Shut up", checked: false, family_name:"MAIN CHARACTERISTICS"  },
                { name: "Friendly/Non-solicited ", checked: false, family_name:"MAIN CHARACTERISTICS"  },
                { name: "Block Purchase %", checked: false, family_name:"BLOCK PURCHASE" },
                { name: " Top Up (droit de suite) granted to the Sellers of the block  ", checked: false, family_name:"BLOCK PURCHASE" },
                { name: "Adjustment of the price of the block  (Complément / ajustement de prix)", checked: false, family_name:"BLOCK PURCHASE" },
                { name: "Top Up (droit de suite)  granted to the minority shareholders", checked: false, family_name:"OFFER PRICE" },
                { name: "Adjustment of the Offer Price  (Complément / ajustement de prix)", checked: false, family_name:"OFFER PRICE" },
                { name: "Squeeze out Kicker % of the Offer Price", checked: false, family_name:"OFFER PRICE" },
                { name: "Price increase between filing and clearance", checked: false, family_name:"OFFER PRICE" },
                { name: "Dividend Distribution during the Offer Period", checked: false, family_name:"OFFER PRICE" },
                { name: "TOA  (No Shop/Break-up Fee/Reverse break-up fee/R&W) ", checked: false },
                { name: "Break-up fee  %/Deal Value on 100%", checked: false },
                { name: "Reverse Break-up fee  %/Deal Value on 100%", checked: false },
                { name: "Shareholder's Undertaking to Tender or not to Tender", checked: false },
                { name: "Escrow of Target securities", checked: false },
                { name: "Reinvestment ", checked: false },
                { name: " Management Package or other advantages granted to the managers put in place in the context of the offer (Other than Reinvestment)", checked: false },
                { name: "Other Agreements (Call option, SHA...) ", checked: false },
                { name: "Pre-offer Regulatory Conditions", checked: false },
                { name: "Other Pre-offer Conditions ", checked: false },
                { name: "Opening of the offer subject to obtaining of regulatory authorization  (Art. 231-32, 3°)", checked: false },
                { name: "Offer Conditions  Mandatory Level of acceptances  (Seuil de caducité - Art. 231-9 I)", checked: false },
                { name: "Offer Conditions   Optional Level of acceptances (Seuil de renonciation - Art. 231-9 II)", checked: false },
                { name: "Other Offer Conditions  (As authorized by RG AMF)", checked: false },
                { name: "Simplified offer Description of a new strategy Yes/No/ N/A", checked: false },
                { name: "Intention to initiate a squeeze out or reserve the right to do so", checked: false },
                { name: "Intention to Merge following the Offer", checked: false },
                { name: "Intention to make an exceptional dividend distribution or a Debt Push Down", checked: false },
                { name: "Intention to delist", checked: false },
                { name: "Intention to file a repurchase offer followed by a squeeze out (OPR-RO) if the squeeze out threshold is reached subsequently", checked: false },
                { name: "Amount of the synergies disclosed", checked: false },
                { name: "Other Relevant Intentions ", checked: false },
                { name: "Intent to Tender Treasury Shares", checked: false },
                { name: "Securities Targeted by the Offer other than the shares not already owned by Bidder", checked: false },
                { name: " Securities Excluded from the Offer", checked: false },
                { name: "Liquidity Agreements with shareholders Fixed or Variable Price", checked: false },
                { name: "Deal Value for 100% (other then OPRA and share buy back)", checked: false },
                { name: "Deal Value for the targeted shares - OPRA and share buy back", checked: false },
                { name: "Bidder's costs  €    When a range was indicated, we selected the highest amount ", checked: false },
                { name: "Cost of the block purchase included in Bidder's costs ? ", checked: false },
                { name: "Bidder's costs   % of the Deal Value  ", checked: false },
                { name: "Simultaneous offer made or registered abroad ", checked: false },
                { name: "Reimbursement of brokerage fees ", checked: false },
                { name: "Access to data room and inside information (other than Target BP)", checked: false },
                { name: "Financial communication disclosed to Bidder and the independent expert  Target BP/Bidder BP/Analysts Consensus)", checked: false },
                { name: "Net Asset Value (NAV)  Actif net comptable (ANC)", checked: false },
                { name: "Revalued Net Asset Value (RNAV)  Actif net réévalué (ANR)", checked: false },
                { name: "Analysis of trading prices  Analyse du cours de bourse", checked: false },
                { name: "Price targets from financial analysts  Objectifs de cours des analystes ", checked: false },
                { name: "DCF Actualisation des flux de trésorerie disponibles", checked: false },
                { name: " Dividend discount model Actualisation des flux de dividendes futurs", checked: false },
                { name: "Trading multiples of comparable listed companies Multiples boursiers de sociétés comparables", checked: false },
                { name: "Precedent transactions  Multiples de transactions comparables", checked: false },
                { name: "Recent transaction on the Target share capital  Transaction récente sur le capital", checked: false },
                { name: "Other criteria (if any)", checked: false },
                { name: "Deal value additional information  (if necessary)", checked: false },
                { name: " Comments relating to premium  (if necessary)", checked: false },
                { name: "SPOT", checked: false },
                { name: "1M/20 j", checked: false },
                { name: "2M", checked: false },
                { name: "3M/60 j", checked: false },
                { name: " 6M", checked: false },
                { name: "1Y", checked: false },
                { name: "Initial  C = Share Capital  VR = Voting Rights", checked: false },
                { name: "At Filing", checked: false },
                { name: "Before Reopening if any", checked: false },
                { name: "End of the Offer", checked: true },
                { name: "Market Purchase during the offer period (other than during the offer) %", checked: false },
                { name: "Squeeze Out 95% Threshold Calculation", checked: false },
                { name: "Squeeze out Completed following the Offer", checked: false },
                { name: "Squeeze out completed following a subsequent offer", checked: false },
                { name: "Green Mailing preventing to reach 90%  (95% until 22 July 2019) ", checked: false },
                { name: "Fairness Opinion Yes/No Voluntary/Mandatory", checked: false },
                { name: "AMF request to appoint a new independent expert  Yes/No / N/A", checked: false },
                { name: "AMF objection to the appointment of the new independent expert proposed by Target upon AMF's request Yes/No/ N/A", checked: false },
                { name: "AMF objection to the appointment of the independent expert proposed by Target if no ad hoc committee was set up Yes/No/N/A", checked: false },
                { name: "Independent Expert", checked: false },
                { name: "Fees of the Independent Expert  When a range was indicated, we selected the highest amount", checked: false },
                { name: "Ad Hoc Committee (Yes/No - Mission)", checked: false },
                { name: "Conflicted Directors if disclosed as such in the offer document", checked: false },
                { name: "Abstention of the Disclosed Conflicted Directors", checked: false },
                { name: "Board members' Attendance/Absence", checked: false },
                { name: "Recommendation to tender (Unanimous/Majority/No recommendation/Any specificities)", checked: false },
                { name: "Opinion of the workers council on the offer (Information available since June 2018 only)", checked: false },
                { name: "Litigation/Complaints relating to the offer", checked: false },
                { name: "Deal advised by Bredin Prat ", checked: false },
                { name: "Comments ", checked: false },
                { name: "Lien à la décision de conformité de l'AMF ", checked: true },
                { name: "Lien à la note d'information", checked: true },
                { name: "Lien à la note en réponse", checked: true },
                { name: "Lien à la décision de mise en œuvre du squeeze out ", checked: true },
                { name: "Lien au complément de la note d'information  (surenchère)", checked: false },
                { name: "Lien au complément de la note d'information 2 - (surenchère)", checked: false },
            ],
            groupe1: ["A", "B"],
            checkedCol: false,
            defaultcol: true,
            right: false,
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    }

    toggleDrawer() {
        //console.log(this.state.right);
        this.setState({ right: !this.state.right }, function () {
            console.log(this.state.right);
        });

    };

    handleChange(elt, index) {
        console.log(elt);
        var cloneColList = JSON.parse(JSON.stringify(this.state)).col_list;
        cloneColList[index].checked = !elt.checked;
        this.setState({ col_list: cloneColList }, function () {
            console.log(this.state.col_list);
        });
    }

    family = (family_name) => {
        var col = [...this.state.col_list]
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography >{family_name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="col-select">
                    {col.map((elt, i) => {
                        if (elt.family_name == family_name) {
                            return (
                                <ListItem key={i} role={undefined} dense button onClick={() => this.handleChange(elt, i)} >
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={elt.checked}
                                            onChange={() => this.handleChange(elt, i)}
                                            value={elt.checked}
                                            className="col-checkbox"
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`${elt.name}`} />
                                </ListItem>
                            );
                        }
                    })}
                </ExpansionPanelDetails>
            </ExpansionPanel>

        )


    }

    render() {
        const { ...props } = this.props;
        const values = queryString.parse(this.props.location.search)

        var col = [...this.state.col_list]
        const UrlField = ({ record, source }) => {
            if (record[source] == "N/A") {
                return <span>N/A</span>;
            } else {
                if (record[source] == "") {
                    return <span></span>;
                } else {
                    if (source == "Lien à la décision de conformité de l'AMF ") {
                        return <a href={record[source]} target="_blank">Conformité</a>;
                    }
                    if (source == "Lien à la note d'information") {
                        return <a href={record[source]} target="_blank">Note d'information</a>;
                    }
                    if (source == "Lien à la note en réponse") {
                        return <a href={record[source]} target="_blank">Note en réponse</a>;
                    }
                    if (source == "Lien à la décision de mise en œuvre du squeeze out ") {
                        return <a href={record[source]} target="_blank">Retrait obligatoire</a>;
                    }
                    if (source == "Lien au complément de la note d'information  (surenchère)") {
                        return <a href={record[source]} target="_blank">Lien</a>;
                    }
                    if (source == "Lien au complément de la note d'information 2 - (surenchère)") {
                        return <a href={record[source]} target="_blank">Lien</a>;
                    }
                }
            }


        }
        var fieldsToSend = []
        const ColToDisplay = col.map((elt, i) => {
            if (elt.checked == true) {
                fieldsToSend.push(elt.name);
                if (elt.name == "id") {
                    return <TextField key={i} label={elt.name} source={elt.name} />;
                } else {
                    if (elt.name.startsWith("Lien") == true) {
                        console.log(elt.name);
                        return <UrlField key={i} label={elt.name} source={elt.name} sortable={false} />;
                    } else {
                        if (elt.name == "Fees of the Independent Expert When a range was indicated, we selected the highest amount") {
                            return <NumberField key={i} label={elt.name} source={elt.name} options={{ style: 'currency', currency: 'EUR' }} sortable={false} />;
                        } else {
                            return <TextField key={i} label={elt.name} source={elt.name} sortable={false} />;
                        }
                    }
                }
            }
        });

        const family1 = this.family("MAIN CHARACTERISTICS");
        const family2 = this.family("BLOCK PURCHASE");
        const family3 = this.family("OFFER PRICE");
        const family4 = this.family("OTHER AGREEMENTS");
        const family5 = this.family("PRE-OFFER CONDITIONS");
        const family6 = this.family("OFFER CONDITIONS");
        const family7 = this.family("BIDDER'S INTENTIONS");
        const family8 = this.family("SHARES TARGETED OR EXCLUDED BY THE OFFER");
        const family9 = this.family("CW - DN");
        const family10 = this.family("PREMIUM");
        const family11 = this.family("STAKE OWNED BY THE BIDDER");
        const family12 = this.family("EL");
        const family13 = this.family("SQUEEZE OUT");
        const family14 = this.family("FAIRNESS OPINION");
        const family15 = this.family("TARGET BOARD APPROVAL PROCESS");
        const family16 = this.family("FR - GC");
        const sideList = side => (
            <div className="select-col" role="presentation">
                <ul className="col-list">
                    {family1}
                    {family2}
                    {family3}
                    {family4}
                    {family5}
                    {family6}
                    {family7}
                    {family8}
                    {family9}
                    {family10}
                    {family11}
                    {family12}
                    {family13}
                    {family14}
                    {family15}
                    {family16}
                </ul>
            </div>
        );

        const exporter = tenderoffers => {
            const data = tenderoffers.map(tenderoffer => ({
                ...tenderoffer
            }))
            console.log(data);
            const csv = convertToCSV({
                data: data,
                fields: fieldsToSend,
                delimiter: ","
            });
            //downloadCSV(csv, 'tenderoffers');
            //var buf = new Buffer.from(JSON.stringify(csv));
            var blob = new Blob([JSON.stringify(csv, null, 2)], { type: 'application/json' });
            let formData = new FormData();
            formData.append('filter', values.filter);
            formData.append('user', localStorage.getItem("username"));
            formData.append('blob', blob, 'test.csv');
            axios({
                method: 'post',
                url: 'http://localhost:5000/email',
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } },
                validateStatus: (status) => {
                    return true;
                },
            }).catch(error => {
                console.log(error);
            }).then(response => {
                console.log(response);
            });
        }

        const postRowStyle = (record, index) => ({
            backgroundColor: record.id % 2 == 0 ? '#ecf2f8' : 'white',
        });

        //const PostPagination = props => <Pagination rowsPerPageOptions={[]} perPage={500} {...props} />;


        return (<div>
            <Button startIcon={<AddBoxIcon color="primary" />} onClick={this.toggleDrawer}>Add Columns</Button>
            {/*<ExportButton resource={tenderoffers} filters={<DealFilter/>}/>*/}
            <List filters={<DealFilter />} {...props} bulkActions={false} sort={{ field: 'id', order: 'ASC' }} exporter={exporter}>
                <Datagrid rowClick="show" className="alloffers" rowStyle={postRowStyle}>
                    {ColToDisplay}
                </Datagrid>
            </List>
            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer} className="drawer">
                <Typography variant="overline" className="instruction">Sélectionnez les colonnes à afficher puis clickez sur Valider.</Typography>
                <RefreshButton label="Valider" icon={<CheckIcon />} className="validate-selection" />
                {sideList('right')}
            </Drawer>
        </div>);
    }

}

export default DealList;