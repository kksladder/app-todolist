import React from 'react';

const TodoItem = ({ task, isDone, creatDate }) => {
    return (
        <div>
            <input type='checkbox' checked={isDone} name='' id='' />
            <strong>{task}</strong>
            <span>{creatDate}</span>
            <button>삭제</button>
        </div>
    );
};

export default TodoItem;
