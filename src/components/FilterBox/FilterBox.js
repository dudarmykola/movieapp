import React, {useState} from 'react';

import { fade, makeStyles } from "@material-ui/core/styles";
import {
    Button,
    InputBase,
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
                width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

const FilterBox = props => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');
    const {
        isFetching,
        onSearchChange
    } = props;

    return (
        <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) =>  setSearchValue(e.target.value)}
                    value={searchValue}
                />
            </div>
            <Button
                disabled={isFetching}
                color="primary"
                variant="contained"
                onClick={() => onSearchChange(searchValue)}
            >
                Search
            </Button>
        </>
    );
};

export default FilterBox;
