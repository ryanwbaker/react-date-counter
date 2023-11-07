import { useState } from "react";
function Counter({ count, countFunc, step }) {
  return (
    <div>
      <button onClick={() => countFunc(count - step)}>-</button>
      <span>
        <input
          type="text"
          onChange={(e) => countFunc(+e.target.value)}
          value={count}
        ></input>
      </span>
      <button onClick={() => countFunc(count + step)}>+</button>
    </div>
  );
}

function Slider({ min, max, stateVar, stateFunc }) {
  return (
    <>
      <input
        type="range"
        min={1}
        max={100}
        value={stateVar}
        onChange={(e) => stateFunc(+e.target.value)}
      ></input>
      <span>{stateVar}</span>
    </>
  );
}

// V1; no slider
// function DateStepCounter() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);
//   let date = new Date();
//   date.setDate(date.getDate() + count);

//   return (
//     <div>
//       <Counter
//         text="Step"
//         subFunc={() => setStep((s) => s - 1)}
//         addFunc={() => setStep((s) => s + 1)}
//         count={step}
//       />
//       <Counter
//         text="Count"
//         subFunc={() => setCount((c) => c - step)}
//         addFunc={() => setCount((c) => c + step)}
//         count={count}
//       />
//       <span>
//         {count === 0
//           ? "Today is "
//           : count > 0
//           ? `${count} day${count === 1 ? "" : "s"} from today is `
//           : `${count * -1} day${count === -1 ? "" : "s"} ago was `}
//       </span>
//       <span>{date.toDateString()}.</span>
//     </div>
//   );
// }

function DateStepCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Slider min={0} max={100} stateVar={step} stateFunc={setStep} />
      <Counter count={count} countFunc={setCount} step={step} />
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
