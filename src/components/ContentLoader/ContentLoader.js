import React from 'react';

import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const ContentLoader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Skeleton animation='wave' />
            <Skeleton animation='wave' />
            <Skeleton animation='wave' />
        </div>
    );
};

export default ContentLoader;