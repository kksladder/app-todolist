import React from 'react';

const Todo = () => {
    return (
        <>
            <div>
                <div>
                    <strong>2024.11.21</strong>
                </div>
                <p>오늘의 할 일을 적어보세요.</p>
            </div>
            <div>
                <h2>새로운 Todo 작성하기</h2>

                <input type='text' placeholder='하고 싶은 일을 추가하시오' />
                <button>할 일 추가</button>
            </div>
            <div>
                <h2>할 일 목록</h2>
                <input type='text' placeholder='하기 싫은 일을 추가하시오' />
                <ul>
                    <li>고양이 밥주기</li>
                    <strong>2024.11.21</strong>
                    <button>삭제</button>
                    <li>감자 캐기</li>
                    <strong>2024.11.21</strong>
                    <button>삭제</button>
                    <li>고양이 놀아주기</li>
                    <strong>2024.11.21</strong>
                    <button>삭제</button>
                </ul>
            </div>
        </>
    );
};

export default Todo;
