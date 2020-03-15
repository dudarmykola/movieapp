import React from 'react';

import MovieItem from '../MovieItem/MovieItem';

const MoviesList = ({ movies }) => {
    return (
        <>
            { movies.map((item, index) => (
                <MovieItem key={index} movie={item} />
            ))}
        </>
    );
};

export default MoviesList;