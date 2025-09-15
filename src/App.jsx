import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

export default function App() {
  const value = useSelector((s) => s.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: 60 }}>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: 8 }}>
        -
      </button>
    </div>
  );
}
