import React from 'react';

const MovieItem = ({movie}) => {
    const {
        popularity,
        vote_count,
        video,
        poster_path,
        id,
        adult,
        backdrop_path,
        original_language,
        original_title,
        genre_ids,
        title,
        vote_average,
        overview,
        release_date,
    } = movie;
    return (
        <ul>
            <li>{`popularity: ${popularity}`}</li>
            <li>{`vote_count: ${vote_count}`}</li>
            <li>{`video: ${video}`}</li>
            <li>{`poster_path: ${poster_path}`}</li>
            <li>{`id: ${id}`}</li>
            <li>{`adult: ${adult}`}</li>
            <li>{`backdrop_path: ${backdrop_path}`}</li>
            <li>{`original_language: ${original_language}`}</li>
            <li>{`original_title: ${original_title}`}</li>
            <li>{`genre_ids: ${genre_ids}`}</li>
            <li>{`title: ${title}`}</li>
            <li>{`vote_average: ${vote_average}`}</li>
            <li>{`overview: ${overview}`}</li>
            <li>{`release_date: ${release_date}`}</li>
        </ul>
    );
};

export default MovieItem;