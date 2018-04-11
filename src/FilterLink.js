import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class FilterLink extends React.Component {
    componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount() {
        this.unsubscribe(); // return value of `store.subscribe()`
    }
    render() {
        return (
            <Filter
                active={this.props.action === this.context.store.getState().visibilityFilter}
                handleFilter={
                    () => {
                        this.context.store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter: this.props.action
                        })

                    }
                }
            >{this.props.children}</Filter>
        );
    }
}

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

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.action === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.action
    }
};

FilterLink.contextTypes = {
    store: PropTypes.object
}
export default FilterLink;

const Filter = (props) => {
    if (props.active)
        return (<span>{props.children}</span>);
    return (<div><a href='#' onClick={(event) => {
        event.preventDefault();
        props.handleFilter();
    }}>{props.children}</a></div>);
}