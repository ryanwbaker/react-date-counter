import { useState } from "react";
function Counter({ text, count, addFunc, subFunc }) {
  return (
    <div>
      <button onClick={() => subFunc()}>-</button>
      <span>
        {text}: {count}
      </span>
      <button onClick={() => addFunc()}>+</button>
    </div>
  );
}

function DateStepCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <Counter
        text="Step"
        subFunc={() => setStep((s) => s - 1)}
        addFunc={() => setStep((s) => s + 1)}
        count={step}
      />
      <Counter
        text="Count"
        subFunc={() => setCount((c) => c - step)}
        addFunc={() => setCount((c) => c + step)}
        count={count}
      />
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} day${count === 1 ? "" : "s"} from today is `
          : `${count * -1} day${count === -1 ? "" : "s"} ago was `}
      </span>
      <span>{date.toDateString()}.</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <DateStepCounter />
    </div>
  );
}
