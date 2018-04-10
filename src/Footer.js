import React from 'react';
import FilterLink from './FilterLink';
class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FilterLink text={'All'} action={'SHOW_ALL'} />
                <FilterLink text={'Active'} action={'SHOW_ACTIVE'} />
                <FilterLink text={'completed'} action={'SHOW_COMPLETED'} />
            </React.Fragment>
        );
    }
}
export default Footer;