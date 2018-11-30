import React, { useState } from 'react';

import Test from './Test';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <Test testProp={count} title='hey'/>
        </div>
    );
};

export default Counter;