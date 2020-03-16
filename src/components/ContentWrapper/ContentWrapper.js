import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
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
                <Grid container justify="center" wrap="wrap">
                    <Grid item xs={12} md={10} lg={8}>
                        <Grid container justify={"center"} direction={"row"} wrap={"wrap"}>
                            {props.children}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default ContentWrapper;
