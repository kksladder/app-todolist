import React from 'react';

const Todolist = () => {
    return (
        <div>
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
        </div>
    );
};

export default Todolist;
