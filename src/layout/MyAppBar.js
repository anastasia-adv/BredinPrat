import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const MyAppBar = ({ ...props }) => (
    <AppBar {...props}>
        <Typography
            variant="Target"
            color="inherit"
            id="react-admin-title"
        />
    </AppBar>
);

export default MyAppBar;