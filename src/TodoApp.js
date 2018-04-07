import React from 'react';

let nextTodoId = 2;
class TodoApp extends React.Component {

    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.props;
        return (
            <div>
                <input ref={(node) => this.inputText = node} />
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TO_DO',
                        id: nextTodoId++,
                        text: this.inputText.value
                    })
                    this.inputText.value = '';
                }} />
                <ul>
                    {store.getState().todoArray.map((todo) =>
                        <li
                            key={todo.id}
                            onClick={() => store.dispatch({
                                type: 'TOGGLE_TO_DO',
                                id: todo.id
                            })}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.text}
                        </li>)}
                </ul>
            </div>
        );
    }
}
export default TodoApp;