import React from 'react';

const AddTodo = ({ store }) => {
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

export default AddTodo;