import React from 'react';
import FilterLink from './FilterLink';
class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FilterLink store={this.props.store} text={'All'} action={'SHOW_ALL'} />
                <FilterLink store={this.props.store} text={'Active'} action={'SHOW_ACTIVE'} />
                <FilterLink store={this.props.store} text={'completed'} action={'SHOW_COMPLETED'} />
            </React.Fragment>
        );
    }
}
export default Footer;