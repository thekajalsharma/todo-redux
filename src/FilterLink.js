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
                    (event) => {
                        event.preventDefault();
                        console.log('FilterLink::::Dispatching SET_VISIBILITY FILTER');
                        this.context.store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter: this.props.action
                        })
                        console.log('FilterLink::::Current State');
                        console.log(this.context.store.getState());
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
    return (<div><a href='#' onClick={props.handleFilter}>{props.text}</a></div>);
}