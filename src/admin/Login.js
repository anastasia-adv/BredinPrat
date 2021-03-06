import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin  } from 'react-admin';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";

class MyLoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.sendDate = this.sendDate.bind(this);
    }

    handleChange(event, type) {
        if (type == "username") {
            this.setState({ username: event.target.value });
        }
        if (type == "pwd") {
            this.setState({ password: event.target.value });
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        // gather your data/credentials here
        const credentials = {
            username: this.state.username,
            password: this.state.password,
        };

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);

        setTimeout(() => {
            if (localStorage.getItem("id")) {
                console.log("login ok");
                this.props.history.push('/tenderoffers')
            }
        }, 1500);
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
                                    <img src="Logo_BP.png" className="BP_logo" />
                                    <form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col md={12}>
                                                <TextField
                                                    onChange={(e) => this.handleChange(e, "username")}
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
                                                <Button type="submit" className="login-btn" >
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