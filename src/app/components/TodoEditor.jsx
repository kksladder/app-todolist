'use client';
import React, { useState } from 'react';

const TodoEditor = () => {
    const [] = useState();
    return (
        <div>
            <div>
                <h2>새로운 Todo 작성하기</h2>

                <input type='text' placeholder=' 고양이랑 놀아주기' />
                <button>할 일 추가</button>
            </div>
            <div></div>
        </div>
    );
};

export default TodoEditor;
