import React from 'react';

const page = () => {
    return (
        <div>
            <div>
                <h2>새로운 Todo 작성하기</h2>

                <input type='text' placeholder='하고 싶은 일을 추가하시오' />
                <button>할 일 추가</button>
            </div>
        </div>
    );
};

export default page;
