import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type MinhocaProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

function Button({isOutlined = false, ...props}: MinhocaProps) {
  return(
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props}/>
  );
}

export { Button };