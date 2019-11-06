import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import axios from "axios";


class MyLoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, type){
        if(type == "email"){
            this.setState({email : event.target.value});
        }
        if(type == "pwd"){
            this.setState({password : event.target.value});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        console.log(event);
        axios({
            method: 'post',
            url: 'http://localhost:5000/login',
            data: {
                email: this.state.email,
                password: this.state.password
            },
            config: { headers: {'Content-Type': 'application/json' }},
            validateStatus: (status) => {
              return true; 
            },
          }).catch(error => {
            console.log(error);
          }).then(response => {
              console.log(response);
          });
      }

    render() {
        return (
            <div className="login-back">
                <Grid fluid>
                    <Row>
                        <Col md={4} xsOffset={4} className="login-row">
                            <Card className="login-form">
                                {/*<CardMedia component="img" image="Logo_BP.png" className="BP_logo"/>*/}
                                <CardContent>
                                    <img src="Logo_BP.png" className="BP_logo"/>
                                    <form onSubmit={this.handleSubmit }>
                                        <Row>
                                            <Col md={12}>
                                                <TextField
                                                    onChange={(e) => this.handleChange(e, "email")}
                                                    id="filled-email-input"
                                                    label="Email"
                                                    className="email"
                                                    type="email"
                                                    name="email"
                                                    autoComplete="email"
                                                    margin="normal"
                                                    variant="filled"
                                                    required
                                                />
                                            </Col>
                                            <Col md={12}>
                                                <TextField
                                                    onChange={(e) => this.handleChange(e, "pwd")}
                                                    id="filled-password-input"
                                                    label="Password"
                                                    className="pwd"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    margin="normal"
                                                    variant="filled"
                                                    required
                                                />
                                            </Col>
                                            <Col md={12}>
                                                <Button type="submit" className="login-btn">
                                                    Login
                                                </Button>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
};

export default connect(undefined, { userLogin })(MyLoginPage);