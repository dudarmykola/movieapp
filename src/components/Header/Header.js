import React from 'react';

import FilterBox from '../FilterBox';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Movie app
                    </Typography>
                    <FilterBox />
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
