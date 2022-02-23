import { useState } from 'react';
import { Paragraph, Button, Wrapper } from './CounterStyles';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Wrapper>
      <Paragraph>{count}</Paragraph>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </Wrapper>
  );
};

export default Counter;
