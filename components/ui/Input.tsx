import clsx from "clsx";

interface inputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({ ...props }: inputProps) => {
  return (
    <>
      <input
        {...props}
        className={clsx(
          "w-full p-2 border-gray-200 border outline-none",
          props.className
        )}
      />
    </>
  );
};

export default Input;
