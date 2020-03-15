import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { getImageSrc } from '../../common/utils';

import {
    GridList,
    GridListTile,
    GridListTileBar,
    ListSubheader,
} from '@material-ui/core';
import ContentLoader from '../ContentLoader';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const RecommendationList = props => {
    const classes = useStyles();
    const {
        items,
        isFetched,
        isFetching,
        onRecommendationClick,
    } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Recommendations:</ListSubheader>
                </GridListTile>
                {!isFetched && isFetching && <ContentLoader />}
                {isFetched && items && items.length && items.map((item, index) => (
                    <GridListTile
                        key={index}
                        onClick={() => onRecommendationClick(item)}
                    >
                        <img src={getImageSrc(item.poster_path)} alt={item.title} />
                        <GridListTileBar
                            title={item.title}
                            subtitle={<span>({item.original_title})</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default RecommendationList;