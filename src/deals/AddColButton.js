import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AddColButton extends Component {
    constructor(props) {
        super(props);
       }

    handleClick = () => {
        alert("clicked");
    }

    render() {
        return <Button onClick={this.handleClick}>Display column</Button>;
    }
}


export default AddColButton;