import React, { Component } from 'react';
import { connect } from 'react-redux';

import { urlsHelper } from '../../common/urlsHelper';
import { getData } from '../../store/actions/movieActions';

import MoviesList from './MoviesList';
import ContentLoader from '../ContentLoader';
import ContentWrapper from '../ContentWrapper';

class MoviesListContainer extends Component {
    componentDidMount = () => {
        const url = urlsHelper.TOP_RATED;
        this.props.getData(url);
    };

    render() {
        const {
            isFetching,
            searchItems,
            searchQuery,
            isFetchedTop,
            topRatedMovies,
            isFetchedSearch,
        } = this.props;
        return (
            <ContentWrapper>
                { isFetching && <ContentLoader /> }
                {
                    !isFetching
                    && (isFetchedTop || isFetchedSearch)
                    && <MoviesList topRated={topRatedMovies} searchItems={searchItems} searchQuery={searchQuery}/>
                }
            </ContentWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    const moviesState = state.movies;
    const {
        searchItemsStatus,
        topRatedMoviesStatus,
    } = moviesState;

    return {
        searchItems: searchItemsStatus.data,
        searchQuery: searchItemsStatus.query,
        topRatedMovies: topRatedMoviesStatus.data,
        isFetching: topRatedMoviesStatus.isFetching || searchItemsStatus.isFetching,
        isFetchedTop: topRatedMoviesStatus.isFetched,
        isFetchedSearch: searchItemsStatus.isFetched,
    }
};

const mapDispatchToProps = {
    getData,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MoviesListContainer);
