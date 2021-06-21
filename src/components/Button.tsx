import { ReactNode, useState } from "react";

type MinhocaProps = {
  children?: ReactNode;
};

function Button(props: MinhocaProps) {
  return(
    <button>{props.children || "Button"}</button>
  );
}

function IncrementButton() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter +1);
  }

  return (
    <button onClick={increment}>{counter}</button>
  );
}

export { Button, IncrementButton };