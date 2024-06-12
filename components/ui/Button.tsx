"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface buttonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string | ReactNode;
  actionButton?: boolean;
}

const Button = ({ type, text, onClick, actionButton, ...rest }: buttonProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        onClick={onClick}
        type={type}
        disabled={pending}
        className={clsx(
          actionButton && `bg-orange-700 rounded-full p-2 text-white`,
          `bg-orange-700 px-2 text-white`,
          pending && "opacity-50 !cursor-wait"
        )}
        {...rest}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
