import React from 'react';
import PropTypes from 'prop-types';
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
                text={this.props.text}
                active={this.props.action === this.context.store.getState().visibilityFilter}
                handleFilter={
                    () => {
                        this.context.store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter: this.props.action
                        })

                    }
                }
            />
        );
    }
}

FilterLink.contextTypes = {
    store: PropTypes.object
}
export default FilterLink;

const Filter = (props) => {
    if (props.active)
        return (<span>{props.text}</span>);
    return (<div><a href='#' onClick={(event) => {
        event.preventDefault();
        props.handleFilter();
    }}>{props.text}</a></div>);
}