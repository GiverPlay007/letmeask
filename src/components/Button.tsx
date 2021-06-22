import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type MinhocaProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: MinhocaProps) {
  return(
    <button className="button" {...props}/>
  );
}

export { Button };