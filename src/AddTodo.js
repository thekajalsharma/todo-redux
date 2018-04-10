import React from 'react';
import PropTypes from 'prop-types';
const AddTodo = (props, { store }) => {
    let nextTodoId = 2;
    return (<div>
        <input ref={(node) => this.inputText = node} />
        <button onClick={() => {
            store.dispatch({
                type: 'ADD_TO_DO',
                id: nextTodoId++,
                text: this.inputText.value
            })
            this.inputText.value = '';
        }} />
    </div>
    );
};
AddTodo.contextTypes = {
    store: PropTypes.object
}
export default AddTodo;