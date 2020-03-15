import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from '../Header';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 64,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ContentWrapper = (props) => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            {props.children}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default ContentWrapper;