import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FileDrop from 'react-file-drop';
import XLSX from 'xlsx';
import {json2excel, excel2json} from 'js2excel';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file:{},
            files:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(files, event) {
        this.setState({file: files[0], files}, function(){
            console.log(this.state.file);
        });
        
    }

    onSubmit(){
        console.log(this.state.file);
        if(this.state.file !== {}){
            excel2json(this.state.files, (data) => {
                console.log('json', data);
                /*var finaldata = data.map(elt =>{
                    var val = Object.keys(elt)[0]
                    return { name: key, y: +e[key] }
                })*/
                data["Tender Offers"].forEach(function(elt){
                    
                    if(elt.id != ""){
                        Object.keys(elt).forEach(function(keyname){
                            /*if(keyname.startsWith("FILTER")){
                                if(elt[keyname] === "Yes"){
                                    elt[keyname] = true
                                }
                                if(elt[keyname] === "No"){
                                    elt[keyname] = false
                                }
                            }*/
                            var newKey = keyname.replace(/(?:\\[rn]|[\r\n]+)+/g, "");
                            if(newKey != keyname){
                                Object.defineProperty(elt, newKey,
                                    Object.getOwnPropertyDescriptor(elt, keyname));
                                delete elt[keyname];
                            }
                        });
                        var numid = parseFloat(elt.id);
                        elt.id = numid;
                        fetch('http://localhost:5000/tenderoffers/' + elt.id, {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' }
                        }).then(() =>{
                            fetch('http://localhost:5000/tenderoffers', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(elt)
                            })
                        })
                    }
                });
                
            }, '');
            setTimeout(function(){ alert("La base des offres publiques a été mise à jour."); }, 3000);
            
        }else{
            console.log("Please submit a file");
        }
    }

    render(){
        const{file} = this.state;
        console.log(this.props);

        if (this.props.permissions == "admin") {
            var permission = <Card>
            <CardHeader title="File upload" />
            <CardContent>
               {/*<input 
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                id="upload-file" 
                style={{ display: 'none' }} 
                type="file" 
                onChange={this.handleChange}

                /> 
                <label htmlFor="upload-file"> 
                <Button variant="raised" component="span"> 
                    Select file 
                </Button> 
                </label> */} 
                 <FileDrop className="drop" onDrop={this.handleChange}>
                    Drop some files here!
                </FileDrop>
                <p className="file_name">{file.name}</p>
            </CardContent>
            <CardActions className="card-actions">
                <Button type="submit" variant="outlined" className="send-btn" id="send-btn" onClick={this.onSubmit}>
                    Envoyer
                </Button>
            </CardActions>
        </Card>;
        }

        return(
            <Grid fluid>
                <Row>
                <Col xs={12} md={4}>
                    <Card>
                        <img src="bpview.jpg" className="BP_view"/>
                        <CardHeader title="Benchmark Des Offres Publiques" />
                        <CardContent>Bienvenue dans l'outil de consultation des offres publiques. </CardContent>
                    </Card>
                </Col>
                <Col xs={12} md={5}>
                <Card>
                    <CardHeader title="Déscription de la plateforme" />
                    <CardContent>
                        <p>Dans l'onglet Tender Offers vous avez la possibilité de consulter l'ensemble des offres publiques.</p>
                        <p>Afin de personaliser votre recherche vous pouver appliquer des filtres spécifiques.</p>
                        <p>Une fois votre recherche accomplie, vous pouvez exporter le tableau correspondant. L'administrateur de la plateforme en sera informé et vous enverra un fichier avec votre extracion.</p>
                    </CardContent>
                </Card>
                </Col>
                <Col xs={12} md={3}>
                    {permission}
                </Col>
                </Row>
            </Grid>   
        )
    } 
}  

export default Home;