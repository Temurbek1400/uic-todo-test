"use client";

import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { ReactNode } from "react";

interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  action: (formData: FormData, project?: string) => Promise<void | boolean>;
}

const Form = ({
  children,
  action,
  className,
  onSubmit,
  ...rest
}: FormProps) => {
  const searchParams = useSearchParams();
  const ref = useRef<HTMLFormElement>(null);
  const project = searchParams.get("project");

  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData, project!);
        ref.current?.reset();
      }}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
