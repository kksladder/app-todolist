import React from 'react';
import TodoHd from './TodoHd';
import Todolist from './Todolist';
import TodoEditor from './TodoEditor';

const mockTodoData = [
    { id: 1, isDone: false, task: '고양이 밥주기', creatDate: '2024.11.24' },

    { id: 2, isDone: false, task: '감자캐기', creatDate: '2424.11.24' },

    { id: 3, isDone: false, task: '고양이 놀아주기', creatDate: '2024.11.24' },
];

const Todo = () => {
    return (
        <>
            <TodoHd />
            <TodoEditor />
            <Todolist mockTodoData={mockTodoData} />
        </>
    );
};

export default Todo;
