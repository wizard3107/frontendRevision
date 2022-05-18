import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h1>Counter</h1>
            Counter: {count}
            <br />
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
export default Counter
