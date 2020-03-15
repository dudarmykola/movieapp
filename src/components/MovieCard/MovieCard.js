import React from 'react';

import { getImageSrc } from '../../common/utils';

import RecommendationList from '../RecommendationList';

import {
    CardMedia,
    Typography,
    CardContent,
    CardActionArea
} from '@material-ui/core'

const MovieCard = props => {
    const {
        movie,
        isFetched,
        isFetching,
        recommendations,
        onRecommendationClick,
    } = props;
    return (
            <CardActionArea>
                <CardMedia
                    component='img'
                    alt={movie.title}
                    height='260'
                    image={getImageSrc(movie.poster_path)}
                    title={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {movie.title}
                    </Typography>
                    <Typography gutterBottom variant='subtitle1' component='h2'>
                        ({movie.original_title})
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {movie.overview}
                    </Typography>
                    <RecommendationList
                        items={recommendations}
                        isFetching={isFetching}
                        isFetched={isFetched}
                        onRecommendationClick={onRecommendationClick}
                    />

                </CardContent>
            </CardActionArea>
    );
};

export default MovieCard;