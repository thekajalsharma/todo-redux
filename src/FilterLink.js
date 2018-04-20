import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './actions/ActionCreator';
/*
Notice that `active` now references the `filter` prop of the `FilterLink` component. 
In order to tell if a `Link` is active or not, we need to compare this prop with the 
`visibilityFilter` in the Redux store's state.

It's common to use the container props when calculating the child props, so we pass them 
in as a second argument to `mapStateToProps`. 
In this case, we'll rename it to `ownProps` to make it more clear that we are talking 
about the container component's _own_ props, and not the props that are passed to the child, 
which is the return value of `mapStateToProps`.
*/

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.action === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleFilter() {
        dispatch(actionCreator.setVisibilityFilter(ownProps.action));
    }
});

const Filter = (props) => {
    if (props.active)
        return (<span>{props.children}</span>);
    return (<div><a href='#' onClick={(event) => {
        event.preventDefault();
        props.handleFilter();
    }}>{props.children}</a></div>);
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterLink;