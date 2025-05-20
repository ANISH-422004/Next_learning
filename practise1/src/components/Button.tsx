import React from "react";


type variantClassType = {
  [key: string]: string
}


type ButtonProps = {
  text: string,
  onClick: () => void,
  disabled?: boolean,
  variant: "primary" | "secondary"

}


const variantClass: variantClassType = {
  primary: "bg-blue-500 hover:bg-blue-700",
  secondary: "bg-gray-500 hover:bg-gray-700",
}


const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false, variant }) => {
  // Props:
  // - text: string
  // - onClick: function
  // - disabled: boolean
  // - variant: string (primary, secondary, etc.)

  return (
    <button className={`${variant === "primary" ? variantClass.primary : variantClass.secondary} text-white font-bold py-2 px-4 rounded m-1`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
