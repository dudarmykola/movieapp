import React from 'react';

import {
    Grid,
    Button
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 64
    },
    img: {
        width: '100%'
    },
    btn: {
        paddingTop: 64
    }
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Grid container xs= {12} lg= {6} justify='column' alignItems='center'>
                    <Grid container xs= {12} justify='center'>
                        <img className={classes.img} src="/404.png" alt="Error"/>
                    </Grid>
                    <Grid container direction='row' justify='center' className={classes.btn}>
                        <Button href='/' variant="contained" color="secondary">
                            Go to Home
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default NotFound;
