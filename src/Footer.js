import React from 'react';
import FilterLink from './FilterLink';
class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FilterLink action={'SHOW_ALL'} >All</FilterLink>
                <FilterLink action={'SHOW_ACTIVE'} >Active</FilterLink >
                <FilterLink action={'SHOW_COMPLETED'} >Completed</FilterLink >
            </React.Fragment >
        );
    }
}
export default Footer;