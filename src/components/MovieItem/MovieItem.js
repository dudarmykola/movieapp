import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    Button,
    CardActions,
    CardContent,
    Typography, Grid
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        margin: 16,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const MovieItem = ({movie, onItemClick}) => {
    const classes = useStyles();
    const {
        title,
        overview,
        popularity,
        original_title
    } = movie;

    return (
        <Grid item xs={12} md={5} lg={4}>
            <Card className={classes.root}>
                <CardContent>
                    {popularity && <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Rate: {popularity}
                    </Typography>}
                    {title && <Typography variant="h5" component="h2">
                        {title}
                    </Typography>}
                    {original_title && <Typography className={classes.pos} color="textSecondary">
                        {original_title}
                    </Typography>}
                    {overview && <Typography variant="body2" component="p">
                        {overview}
                    </Typography>}
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onItemClick}>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default MovieItem;
