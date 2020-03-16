import React from 'react';

import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        padding: 16,
    },
});

const ContentLoader = () => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs='12' md='4' lg='3' className={classes.item}>
                <Skeleton variant="rect" width={'100%'} height={200} />
            </Grid>
            <Grid item xs='12' md='4' lg='3' className={classes.item}>
                <Skeleton variant="rect" width={'100%'} height={200} />
            </Grid>
            <Grid item xs='12' md='4' lg='3' className={classes.item}>
                <Skeleton variant="rect" width={'100%'} height={200} />
            </Grid>
        </>
    );
};

export default ContentLoader;
