import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from './MovieCard';
import EmptyState from '../EmptyState';
import { getRecommendations } from '../../store/actions/movieActions';

class MovieCardContainer extends Component {
    componentDidMount = () => {
        const {
            movie: {
                id
            },
            getRecommendations
        } = this.props;

        getRecommendations(id);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {
            movie,
            getRecommendations,
        } = this.props;

        if (prevProps.movie && movie && (prevProps.movie.id !== movie.id)) {
            getRecommendations(movie.id);
        }
    }

    render () {
        const {
            movie,
            isFetched,
            isFetching,
            recommendations,
            onRecommendationClick,
        } = this.props;
        return (
            <>
                {this.props.movie
                    ? <MovieCard
                        movie={movie}
                        recommendations={recommendations}
                        isFetching={isFetching}
                        isFetched={isFetched}
                        onRecommendationClick={onRecommendationClick}
                    />
                    : <EmptyState />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const moviesState = state.movies;
    const {
        getRecommendationsStatus
    } = moviesState;

    return {
        isFetched: getRecommendationsStatus.isFetched,
        recommendations: getRecommendationsStatus.data,
        isFetching: getRecommendationsStatus.isFetching
    }
};

const mapDispatchToProps = {
    getRecommendations,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieCardContainer);