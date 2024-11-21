import React from 'react';
import { format, formatDate } from 'date-fns';

const TodoHd = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>{format(new Date(2024, 11, 24), 'MM/dd/yyyy')}</h2>
                </div>
                <p>오늘의 할 일을 적어보세요.</p>
            </div>
        </div>
    );
};

export default TodoHd;
