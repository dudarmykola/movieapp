import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from '../../store/actions/movieActions';

import MoviesList from './MoviesList';
import ContentLoader from '../ContentLoader';
import ContentWrapper from '../ContentWrapper';

class MoviesListContainer extends Component {
    componentDidMount = () => {
        const url = '/movie/top_rated';
        this.props.getData(url, { ...this.props });
    };

    render() {
        const {
            isFetched,
            isFetching,
            topRatedMovies,
        } = this.props;
        return (
            <ContentWrapper>
                { isFetching && <ContentLoader /> }
                { !isFetching && isFetched && <MoviesList movies={topRatedMovies}/> }
            </ContentWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    const moviesState = state.movies;
    const {
        topRatedMoviesStatus
    } = moviesState;

    return {
        topRatedMovies: topRatedMoviesStatus.data,
        isFetching: topRatedMoviesStatus.isFetching,
        isFetched: topRatedMoviesStatus.isFetched
    }
};

const mapDispatchToProps = {
    getData,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MoviesListContainer);