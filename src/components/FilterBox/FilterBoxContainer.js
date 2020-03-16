import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearchItems } from '../../store/actions/movieActions';
import FilterBox from './FilterBox';

class FilterBoxContainer extends Component {
    onSearchChange = search => {
        this.props.getSearchItems(search);
    };

    render() {
        return (
            <FilterBox
                isFetching={this.props.isFetching}
                onSearchChange={this.onSearchChange}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const moviesState = state.movies;
    const {
        searchItemsStatus
    } = moviesState;

    return {
        isFetching: searchItemsStatus.isFetching,
    }
};

const mapDispatchToProps = {
    getSearchItems,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilterBoxContainer);
