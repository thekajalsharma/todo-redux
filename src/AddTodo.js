import React from 'react';

class AddTodo extends React.Component {
    render() {
        let nextTodoId = 2;
        return (<div>
            <input ref={(node) => this.inputText = node} />
            <button onClick={() => {
                this.props.store.dispatch({
                    type: 'ADD_TO_DO',
                    id: nextTodoId++,
                    text: this.inputText.value
                })
                this.inputText.value = '';
            }} />
        </div>
        );
    }
}
export default AddTodo;