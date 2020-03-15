import React from 'react';

import Modal from '../Modal';
import MovieCard from '../MovieCard';
import MovieItem from '../MovieItem/MovieItem';

const MoviesList = ({ movies }) => {
    const [openItem, setOpenItem] = React.useState({
        open: false,
        selected: null
    });

    const handleClickOpen = item => {
        setOpenItem({
            open: true,
            selected: item
        });
    };

    const handleClose = () => {
        setOpenItem({
            open: false,
        });
    };

    const modalContent = (
        <MovieCard
            movie={openItem.selected}
            onRecommendationClick={handleClickOpen}
        />
    );

    return (
        <>
            {movies.map((item, index) => (
                <MovieItem
                    key={index}
                    movie={item}
                    onItemClick={() => handleClickOpen(item)}
                />
            ))}
            <Modal
                open={openItem.open}
                handleClose={handleClose}
                content={modalContent}
            />
        </>
    );
};

export default MoviesList;