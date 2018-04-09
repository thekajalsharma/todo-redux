import React from 'react';
class FilterLink extends React.Component {
    render() {
        return (
            <Filter
                text={this.props.text}
                handleFilter={
                    (event) => {
                        event.preventDefault();
                        console.log('FilterLink::::Dispatching SET_VISIBILITY FILTER');
                        this.props.store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter: this.props.action
                        })
                        console.log('FilterLink::::Current State');
                        console.log(this.props.store.getState());
                    }
                }
            />
        );
    }
}
export default FilterLink;

const Filter = (props) => {
    return (
        <div>
            <a href='#' onClick={props.handleFilter}>{props.text}</a>
        </div>
    );
}