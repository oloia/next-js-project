import React, {FC} from 'react';

interface CounterProps {
    value: number;
    onMinus: () => void;
    onPlus: () => void;
}

const Counter:FC<CounterProps> = (props) => {
    const { value, onPlus, onMinus } = props;
    return (
        <div>
            <button onClick={onMinus}>-</button>
            <b>{value}</b>
            <button onClick={onPlus}>+</button>
        </div>
    );
};

export default Counter;